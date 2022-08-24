from django.contrib.auth.models import Group, Permission
import random
import string
import requests
import json
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from datetime import datetime, timedelta

from core.models import ProfileModel, CaptchaModel

User = get_user_model()


def createNewGroup():
    group_name = ""
    while not group_name:
        group_name = input("What is the new group's name? ")
    new_group, created = Group.objects.get_or_create(name=group_name)
    if created:
        print(f"New group named {new_group} created successfully!")
    else:
        print(
            f"We couldn't create a group with name {group_name}. So, it seems {group_name} has already been declared as a group name.")
    return


def code_generator(size=16, chars=string.ascii_uppercase + string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


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


def check_captcha(request):
    captcha_uuid = request.data.get("captcha_uuid", "")
    sent_captcha_code = request.data.get("user_captcha_code", "")
    if captcha_uuid and sent_captcha_code:
        captcha_queryset = CaptchaModel.objects.filter(uuid=captcha_uuid)
        if captcha_queryset.count():
            cur_captcha = captcha_queryset.first()
            if cur_captcha.is_active:
                cur_captcha.is_active = False
                cur_captcha.save()
                captcha_code = cur_captcha.captcha
                if captcha_code == sent_captcha_code:
                    return {"success": True, "message": "Captcha confirmed successfully"}
                return {"success": False, "message": "The captcha code does not match the one existing in our system"}
            else:
                return {"success": False, "message": "The captcha has been expred, please reload the captch code!"}
        return {"success": False, "message": "No captcha code found with the current uuid"}
    return {"success": False, "message": "Captcha information is not provided"}


def remove_old_captcha():
    try:
        three_days_ago = datetime.now() - timedelta(hours=72)
        count = 0
        captcha_queryset = CaptchaModel.objects.filter(created_at__lt=three_days_ago)
        if captcha_queryset.count():
            for item in captcha_queryset:
                print(item)
                item.delete()
                count += 1
        print(f"Remove old captcha task was successfully done and {count} items removed!")
    except Exception as e:
        print(f"Remove old captcha task was failed!")
        print(str(e))
