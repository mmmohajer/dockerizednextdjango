from rest_framework import serializers

from chat.models import PrivateChatRoomModel, PrivateChatRoomMessageModel


class PrivateChatRoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = PrivateChatRoomModel
        fields = ['id', 'uuid', 'user1', 'user2', 'is_activate', 'created_at', 'updated_at']


class PrivateChatRoomMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PrivateChatRoomMessageModel
        fields = ['id', 'uuid', 'user', 'room', 'message', 'created_at', 'updated_at']
