from django.shortcuts import get_object_or_404
from django.conf import settings
from requests import delete
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from rest_framework_simplejwt.tokens import RefreshToken
import django.contrib.auth.password_validation as validators
from django.utils import timezone
from datetime import datetime, timedelta
import requests
import json

from core.permissions import *
from core.models import *
from core.serializers import *
from core.tasks import send_activation_email, send_reset_password_email
from core.utils import isAdmin, oauthHandleToken, is_access_token_valid
from core.token import OneDayAccessToken, ThirtyDaysAccessToken, OneDayRefreshToken, ThirtyDaysRefreshToken

User = get_user_model()


class CreateTokenViewSet(views.APIView):

    def post(self, request, format=None):
        email = request.data.get("email", "")
        password = request.data.get("password", "")
        keep_logged_in = request.data.get("keep_logged_in", False)
        ip_address = request.data.get("ip_address", "")
        use_secure_login_with_ip = True
        UNSUCCESS_TIME_THRESHOLD = 24 * 60 * 60
        try:
            if email and password:
                user = get_object_or_404(User, email=email.lower())
                if user:
                    time_threshold = datetime.now() - timedelta(seconds=UNSUCCESS_TIME_THRESHOLD)
                    number_of_recent_false_attempts = 0
                    if ip_address:
                        number_of_recent_false_attempts = UserEventModel.objects.filter(
                            success=False, ip_address=ip_address, created_at__gte=time_threshold).count()
                    if number_of_recent_false_attempts < 5:
                        if user.check_password(password):
                            if user.is_active:
                                if keep_logged_in:
                                    access_token = str(ThirtyDaysAccessToken.for_user(user))
                                    refresh_token = str(ThirtyDaysRefreshToken.for_user(user))
                                else:
                                    access_token = str(OneDayAccessToken.for_user(user))
                                    refresh_token = str(OneDayRefreshToken.for_user(user))
                                return response.Response(status=status.HTTP_200_OK, data={"access": access_token, "refresh": refresh_token})
                            return response.Response(status=status.HTTP_405_METHOD_NOT_ALLOWED, data={"message": f"There is no active account with your email {email}"})
                        if ip_address:
                            cur_unusccessful_login_attempt = UserEventModel()
                            cur_unusccessful_login_attempt.event = "sent_login_req"
                            cur_unusccessful_login_attempt.ip_address = ip_address
                            cur_unusccessful_login_attempt.success = False
                            cur_unusccessful_login_attempt.save()
                        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Email or password is incorrect."})
                    else:
                        if use_secure_login_with_ip and ip_address:
                            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You have made more than 5 unsuccessful attempts in the last 24 hours. So, we your ip address is in our blaock list for 24 hours."})
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Email or password is incorrect."})
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Email and password are required fields."})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})


class LogOutViewSet(views.APIView):

    def post(self, request, format=None):
        refresh_token = request.data.get("refresh", "")
        if refresh_token:
            try:
                RefreshToken(refresh_token).blacklist()
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"success:": False, "message": f"{str(e)}"})
            return response.Response(status=status.HTTP_200_OK, data={"success": True, "message": "You have been successfully logged out"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"success": False, "message": "You need to send refresh token to properly logout the user"})


class AddUserToGroup(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        cur_user = request.user
        group_name = request.data.get("groupName")
        if not cur_user:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "We found no authenticated user!"})
        if not group_name:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "No group name is specified!"})
        cur_group = Group.objects.filter(name=group_name).first()
        if cur_group:
            cur_group.user_set.add(cur_user)
            return response.Response(status=status.HTTP_200_OK, data={"message": f"User has been successfully added to group {group_name}"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"There is no group existing in the database with name {group_name}"})


class ActivateUserViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, id=request.data.get("userId"))
        if user:
            register_token = request.data.get("token")
            if user.register_token == register_token and is_access_token_valid(register_token):
                user.is_active = True
                user.save(update_fields=["is_active"])
                access_token = str(OneDayAccessToken.for_user(user))
                refresh_token = str(OneDayRefreshToken.for_user(user))
                return response.Response(status=status.HTTP_200_OK, data={"is_activated": True, "message": "User has been successfully activated!", "access": access_token, "refresh": refresh_token})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"is_activated": False, "message": "Unable to activate a user!"})


class ResendActivationEmailViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, email=request.data.get("email"))
        if user:
            user_token = str(OneDayAccessToken.for_user(user))
            user.register_token = user_token
            user.save(update_fields=["register_token"])
            send_activation_email.delay(user.first_name, user.email, user_token)
            return response.Response(status=status.HTTP_200_OK, data={"email_sent": True, "message": "Email has been successfully sent!"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"email_sent": False, "message": "No user found with this email address in our database."})


class SendForgotPasswordViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, email=request.data.get("email"))
        if user:
            user_token = str(OneDayAccessToken.for_user(user))
            user.reset_password_token = user_token
            user.save(update_fields=["reset_password_token"])
            send_reset_password_email.delay(user.first_name, user.email, user_token)
            return response.Response(status=status.HTTP_200_OK, data={"email_sent": True, "message": "Please check your inbox to reset your password!"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"email_sent": False, "message": "No user found with this email address in our database."})


class ResetPasswordViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, id=request.data.get("userId"))
        if user:
            reset_password_token = request.data.get("token")
            if user.reset_password_token == reset_password_token and is_access_token_valid(reset_password_token):
                password = request.data.get("password")
                try:
                    validators.validate_password(password=password, user=user)
                    user.set_password(password)
                    user.is_active = True
                    user.save(update_fields=["is_active", "password"])
                    return response.Response(status=status.HTTP_200_OK, data={"password_reset": True, "message": "Pasword has been reset successfully!"})
                except Exception as e:
                    return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "error": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "message": "Unable to reset the password!"})


class UserDeleteViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, id, *args, **kwargs):
        current_user = request.user
        to_be_deleted_user = get_object_or_404(User, id=id)
        if isAdmin(current_user):
            to_be_deleted_user.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)
        if current_user.id == to_be_deleted_user.id:
            password = request.GET.get("password")
            is_correct_password = to_be_deleted_user.check_password(password)
            if (is_correct_password):
                to_be_deleted_user.delete()
                return response.Response(status=status.HTTP_204_NO_CONTENT)
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Incorrect password"})
        return response.Response(status=status.HTTP_403_FORBIDDEN)


class AuthenticateUserViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        current_user = request.user
        if current_user:
            return response.Response(status=status.HTTP_200_OK, data={"Authenticated": current_user.is_authenticated})
        return response.Response(status=status.HTTP_404_NOT_FOUND)


class GoogleAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.GOOGLE_AUTH_CLIENT_ID
        client_secret = settings.GOOGLE_AUTH_CLIENT_SECRET
        ouathUrl = "https://oauth2.googleapis.com/token"
        redirect_url = settings.GOOGLE_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        googleTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&grant_type=authorization_code&code={code}"
        try:
            res = requests.post(googleTokenReqApiUrl)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class GoogleAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        id_token = request.data.get("id_token")
        googleAuthGetProfileUrl = f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}"
        success, data = oauthHandleToken(request, googleAuthGetProfileUrl)
        if success:
            return response.Response(status=status.HTTP_200_OK, data=data)
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)


class MicrosoftAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.MICROSOFT_AUTH_CLIENT_ID
        client_secret = settings.MICROSOFT_AUTH_CLIENT_SECRET
        ouathUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
        redirect_url = settings.MICROSOFT_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        microsoftTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&grant_type=authorization_code&code={code}"
        try:
            headers = {"Content-Type": "application/x-www-form-urlencoded"}
            payload = {"code": code, "client_secret": client_secret,
                       "grant_type": "authorization_code", "client_id": client_id, "redirect_uri": redirect_url}
            res = requests.post(microsoftTokenReqApiUrl, headers=headers, data=payload)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class MicrosoftAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        microsoftAuthGetProfileUrl = f"https://graph.microsoft.com/oidc/userinfo"
        success, data = oauthHandleToken(request, microsoftAuthGetProfileUrl)
        if success:
            return response.Response(status=status.HTTP_200_OK, data=data)
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)


class FacebookAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.FACEBOOK_AUTH_CLIENT_ID
        client_secret = settings.FACEBOOK_AUTH_CLIENT_SECRET
        ouathUrl = "https://graph.facebook.com/v14.0/oauth/access_token"
        redirect_url = settings.FACEBOOK_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        facebookTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&code={code}"
        try:
            res = requests.get(facebookTokenReqApiUrl)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class FacebookAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        facebookAuthGetIdUrl = f"https://graph.facebook.com/v2.3/me"
        access_token = f"Bearer {request.data.get('access_token')}"
        headers = {"Content-Type": "application/json", "Authorization": access_token}
        try:
            res = requests.get(facebookAuthGetIdUrl, headers=headers)
            user_data = json.loads(res.content)
            user_id = user_data.get("id")
            facebookAuthGetProfileUrl = f"https://graph.facebook.com/{user_id}?fields=id,name,email,picture,first_name,last_name"
            success, data = oauthHandleToken(
                request, facebookAuthGetProfileUrl, first_name_key="first_name", last_name_key="last_name")
            if success:
                return response.Response(status=status.HTTP_200_OK, data=data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
