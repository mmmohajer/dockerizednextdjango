from rest_framework import viewsets, permissions, response, status

from core.permissions import *
from core.models import CaptchaModel
from core.serializers import CaptchaSerializer
from core.pagination import PaginationType1
from core.utils import code_generator


class CaptchaViewSet(viewsets.ModelViewSet):
    queryset = CaptchaModel.objects.all()
    serializer_class = CaptchaSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = PaginationType1

    def create(self, request, *args, **kwargs):
        try:
            request.data._mutable = True
            request.data["captcha"] = code_generator(6)
            request.data._mutable = False
        except Exception as e:
            request.data["captcha"] = code_generator(6)
        serializer = CaptchaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        try:
            request.data._mutable = True
            request.data["captcha"] = code_generator(6)
            request.data._mutable = False
        except Exception as e:
            request.data["captcha"] = code_generator(6)
        instance = self.get_object()
        serializer = CaptchaSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return response.Response(serializer.data, status=status.HTTP_200_OK)
