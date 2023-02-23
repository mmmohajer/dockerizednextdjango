from django.conf import settings
from django.contrib import admin

from . import user_admin, profile_admin, expo_notification_admin, user_event_admin
from core.models import UserModel, ProfileModel, NotificationTokenModel, UserEventModel

admin.site.site_header = settings.SITE_HEADER_NAME
admin.site.register(UserModel, user_admin.UserAdmin)
admin.site.register(ProfileModel, profile_admin.ProfileAdmin)
admin.site.register(NotificationTokenModel, expo_notification_admin.NotificationTokenAdmin)
admin.site.register(UserEventModel, user_event_admin.UserEventAdmin)
