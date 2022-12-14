from django.contrib.auth.models import Group
import requests
import json
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

from core.models import ProfileModel

User = get_user_model()



def isAdmin(user):
    user_groups_queryset = user.groups.all()
    cur_user_groups = [group.name for group in list(user_groups_queryset)]
    if "Admin" in cur_user_groups:
        return True
    return False


def isSubscriber(user):
    user_groups_queryset = user.groups.all()
    cur_user_groups = [group.name for group in list(user_groups_queryset)]
    if "Subscriber" in cur_user_groups:
        return True
    return False


def oauthHandleToken(request, authGetProfileUrl, first_name_key="given_name", last_name_key="family_name"):
    access_token = f"Bearer {request.data.get('access_token')}"
    headers = {"Content-Type": "application/json", "Authorization": access_token}
    try:
        res = requests.get(authGetProfileUrl, headers=headers)
        user_data = json.loads(res.content)
        email = user_data.get("email")
        user_queryset = User.objects.filter(email=email)
        if user_queryset:
            cur_user = user_queryset.first()
            cur_user_access_token = AccessToken.for_user(cur_user)
            cur_user_refresh_token = RefreshToken.for_user(cur_user)
        else:
            first_name = user_data.get(first_name_key)
            last_name = user_data.get(last_name_key)
            # Register User
            cur_user = User(first_name=first_name, last_name=last_name, email=email)
            cur_user.is_active = True
            cur_user.save()
            # Create profile for the new registered user
            profile = ProfileModel()
            profile.user = cur_user
            profile.save()
            subscriber_group = Group.objects.filter(name="Subscriber").first()
            if subscriber_group:
                subscriber_group.user_set.add(cur_user)
            # Generate access and refresh tokens to login the user
            cur_user_access_token = AccessToken.for_user(cur_user)
            cur_user_refresh_token = RefreshToken.for_user(cur_user)
        return (True, {"access": str(cur_user_access_token), "refresh": str(cur_user_refresh_token)})
    except Exception as e:
        return (False, {"Error": str(e)})
