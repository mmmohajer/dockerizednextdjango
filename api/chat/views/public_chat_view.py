from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from core.pagination import PaginationType1
from chat.models import PublicChatRoomModel
from chat.serializers import PublicChatRoomSerializer

User = get_user_model()


class PublicChatRoomViewSet(viewsets.ModelViewSet):
    queryset = PublicChatRoomModel.objects.all()
    serializer_class = PublicChatRoomSerializer
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = PaginationType1
