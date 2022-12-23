from rest_framework import serializers

from core.models import NotificationTokenModel


class NotificationTokenSerializer(serializers.ModelSerializer):

    class Meta:
        model = NotificationTokenModel
        fields = ['id', 'uuid', 'user', 'token', 'created_at', 'updated_at']
