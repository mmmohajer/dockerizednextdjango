from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'profile', views.ProfileViewSet, basename='profile')
api_router.register(r'captcha', views.CaptchaViewSet, basename='captcha')

urlpatterns = [
    path('', include(api_router.urls)),
    path('create-token/', views.CreateTokenViewSet),
    path('logout/', views.LogOutViewSet),
    path('add-user-to-group/', views.AddUserToGroup),
    path('activate-user/', views.ActivateUserViewSet),
    path('resend-activation-email/', views.ResendActivationEmailViewSet),
    path('send-reset-password-email/', views.SendForgotPasswordViewSet),
    path('reset-password/', views.ResetPasswordViewSet),
    path('auth/delete-users/<int:id>/', views.UserDeleteViewSet),
    path('auth/authenticate-user/', views.AuthenticateUserViewSet),
    path('auth/google-auth/', views.GoogleAuthViewSet),
    path('auth/google-auth-handle-token/', views.GoogleAuthHandleTokenViewSet),
    path('auth/microsoft-auth/', views.MicrosoftAuthViewSet),
    path('auth/microsoft-auth-handle-token/', views.MicrosoftAuthHandleTokenViewSet),
    path('auth/facebook-auth/', views.FacebookAuthViewSet),
    path('auth/facebook-auth-handle-token/', views.FacebookAuthHandleTokenViewSet),
    path('expo-notification-token/', views.NotificationTokenViewSet),
    path('user-event/', views.UserEventViewSet),
    path('user-event/<int:id>/', views.SingleUserEventViewSet),
]
