from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from datetime import timedelta


class OneDayAccessToken(AccessToken):
    lifetime = timedelta(minutes=5)


class ThirtyDaysAccessToken(AccessToken):
    lifetime = timedelta(minutes=5)


class OneDayRefreshToken(RefreshToken):
    lifetime = timedelta(days=1)


class ThirtyDaysRefreshToken(RefreshToken):
    lifetime = timedelta(days=30)
