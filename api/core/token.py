from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from datetime import timedelta


class OneDayAccessToken(AccessToken):
    lifetime = timedelta(days=1)


class ThirtyDaysAccessToken(AccessToken):
    lifetime = timedelta(days=30)


class OneDayRefreshToken(RefreshToken):
    lifetime = timedelta(days=1)


class ThirtyDaysRefreshToken(RefreshToken):
    lifetime = timedelta(days=30)
