from rest_framework import serializers
from core.models import UserEventModel


class UserEventSerializer(serializers.ModelSerializer):
    user_email = serializers.SerializerMethodField('get_user_email')

    def get_user_email(self, obj):
        return obj.user.email if obj.user else ""

    class Meta:
        model = UserEventModel
        fields = ['id', 'uuid', 'user', 'user_email', 'ip_address', 'city',
                  'region', 'country', 'event', 'success', 'timezone', 'created_at', 'updated_at']
