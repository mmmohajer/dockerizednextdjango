from rest_framework import serializers
from core.models import UserEventModel
from core.serializers.profile_serializer import ProfileSerializer


class UserEventSerializer(serializers.ModelSerializer):
    profile_id = serializers.IntegerField(write_only=True)
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = UserEventModel
        fields = ['id', 'uuid', 'profile_id', 'profile', 'ip_address', 'city',
                  'region', 'country', 'event', 'timezone', 'created_at', 'updated_at']
