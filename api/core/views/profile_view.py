from django.shortcuts import get_object_or_404, render
from django.conf import settings
from rest_framework import viewsets, mixins, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import os

from core.permissions import *
from core.models import *
from core.serializers import *
from core.utils import isAdmin, isSubscriber, code_generator, find_post_fix_of_a_file
from core.pagination import PaginationType1

User = get_user_model()


class ProfileViewSet(
        mixins.RetrieveModelMixin,
        mixins.UpdateModelMixin,
        mixins.DestroyModelMixin,
        mixins.ListModelMixin,
        viewsets.GenericViewSet):
    queryset = ProfileModel.objects.select_related('user').all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = PaginationType1

    # def get_permissions(self):
    #     if self.request.method == "GET":
    #         return [permissions.IsAuthenticated()]
    #     return [permissions.IsAdminUser()]

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return ProfileModel.objects.select_related('user').all()
        else:
            return []

    @decorators.action(detail=False, methods=["GET", "PUT", "DELETE"], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        profile = get_object_or_404(ProfileModel, user_id=request.user.id)
        if request.method == "GET":
            serializer = ProfileSerializer(profile)
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        elif request.method == "PUT":
            profile = ProfileModel.objects.filter(
                user=request.user).select_related("user")
            if profile.first():
                cur_user = profile.first().user
                first_name = request.data.get("first_name", "")
                last_name = request.data.get("last_name", "")
                if first_name:
                    cur_user.first_name = first_name
                if last_name:
                    cur_user.last_name = last_name
                cur_user.save()
                updatable_fields = [
                    "city", "address", "province", "postal_code", "phone_number"]
                update_kwargs = {}
                for attr in request.data:
                    if (attr in updatable_fields):
                        if request.data.get(attr, ""):
                            update_kwargs[attr] = request.data.get(attr, "")
                profile.update(**update_kwargs)
                if request.data.get("remove_profile_photo", 1):
                    if int(request.data.get("remove_profile_photo")) == 1:
                        photo_path = ""
                        if profile.first().photo:
                            photo_path = profile.first().photo.path
                        if photo_path:
                            if os.path.exists(photo_path):
                                os.remove(photo_path)
                        profile.update(photo=None)
                if request.data.get("photo", ""):
                    photo_path = ""
                    if profile.first().photo:
                        photo_path = profile.first().photo.path
                    if photo_path:
                        if os.path.exists(photo_path):
                            os.remove(photo_path)
                    profile.update(photo=None)
                    postfix, sent_file_name = find_post_fix_of_a_file(
                        request.data.get("photo"))
                    file_name = f"{sent_file_name}-{code_generator(16)}.{postfix}"
                    profile.first().photo.save(file_name, request.data.get("photo"))
            serializer = ProfileSerializer(profile.first())
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        elif request.method == "DELETE":
            user = profile.user
            profile.delete()
            user.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)

    @decorators.action(detail=False, methods=["GET"], permission_classes=[permissions.IsAuthenticated])
    def all(self, request):
        profile_queryset = ProfileModel.objects.select_related('user').all()
        serializer = ProfileSerializer(profile_queryset, many=True)
        return response.Response(status=status.HTTP_200_OK, data=serializer.data)
