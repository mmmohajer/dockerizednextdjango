from rest_framework import serializers

from core.models import CaptchaModel


class CaptchaSerializer(serializers.ModelSerializer):

    class Meta:
        model = CaptchaModel
        fields = ['id', 'uuid', 'captcha', 'is_active', 'created_at', 'updated_at']
