from rest_framework import serializers

from chat.models import PublicChatRoomModel, PublicChatRoomMessageModel


class PublicChatRoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = PublicChatRoomModel
        fields = ['id', 'uuid', 'title', 'created_at', 'updated_at']


class PublicChatRoomMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PublicChatRoomMessageModel
        fields = ['id', 'uuid', 'user', 'room', 'message', 'created_at', 'updated_at']
