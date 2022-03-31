from rest_framework import serializers
from . import models


class ProfileSerializer(serializers.ModelSerializer):
    user_uuid = serializers.SerializerMethodField('get_user_uuid')

    def get_user_uuid(self, obj):
        return obj.user.uuid

    class Meta:
        model = models.Profile
        fields = ['id', 'uuid', 'user_id', 'user_uuid', 'phone_number', 'birth_date',
                  'city', 'country', 'address', 'postal_code', 'photo', 'status']
        extra_fields = ['user_uuid']