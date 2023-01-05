from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'public-chat-room', views.PublicChatRoomViewSet, basename='public-chat-room')

urlpatterns = [
    path('', include(api_router.urls)),
]
