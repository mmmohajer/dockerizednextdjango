from rest_framework import views, viewsets, permissions, response, status

from core.permissions import IsAdminOnly
from core.models import UserEventModel
from core.serializers import UserEventSerializer
from core.utils.auth import isAdmin
from core.pagination import PaginationType1


class UserEventViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        if (request.user and isAdmin(request.user)):
            try:
                page_num = int(request.GET.get("page", 0))
                if page_num > 0:
                    first_item = (page_num - 1) * PaginationType1().page_size
                    last_item = (page_num) * PaginationType1().page_size
                    user_event_qs = UserEventModel.objects.all().order_by(
                        "-created_at")[first_item: last_item]
                else:
                    user_event_qs = UserEventModel.objects.all().select_related("user").order_by("-created_at")
                serializer = UserEventSerializer(user_event_qs, many=True)
                count = UserEventModel.objects.all().count()
                return response.Response(status=status.HTTP_200_OK, data={"data": serializer.data, "count": count})
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"Only admin user is able to see the list of user events"})

    def post(self, request, format=None):
        event = request.data.get("event", "")
        if (event):
            try:
                cur_event_model = UserEventModel()
                if request.user and request.user.id:
                    cur_event_model.user = request.user
                cur_event_model.event = event
                cur_event_model.success = request.data.get("success", True)
                cur_event_model.ip_address = request.data.get("ip_address", None)
                cur_event_model.city = request.data.get("city", None)
                cur_event_model.region = request.data.get("region", None)
                cur_event_model.country = request.data.get("country", None)
                cur_event_model.timezone = request.data.get("timezone", None)
                cur_event_model.save()
                serializer = UserEventSerializer(cur_event_model)
                return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"event is a required field"})


class SingleUserEventViewSet(views.APIView):
    permission_classes = [IsAdminOnly]

    def get(self, request, id, format=None):
        try:
            user_event_qs = UserEventModel.objects.filter(id=id).select_related("user").first()
            if user_event_qs:
                serializer = UserEventSerializer(user_event_qs)
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"No user event found with id={id}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def put(self, request, id, format=None):
        try:
            user_event_qs = UserEventModel.objects.filter(id=id).select_related("user")
            if user_event_qs:
                updatable_fields = ["ip_address", "city", "region", "country", "event", "success"]
                update_kwargs = {}
                for attr in request.data:
                    if (attr in updatable_fields):
                        update_kwargs[attr] = request.data.get(attr)
                user_event_qs.update(**update_kwargs)
                serializer = UserEventSerializer(user_event_qs.first())
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"No user event found with id={id}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def delete(self, request, id, format=None):
        try:
            user_event_qs = UserEventModel.objects.filter(id=id).select_related("user").first()
            if user_event_qs:
                user_event_qs.delete()
                return response.Response(status=status.HTTP_204_NO_CONTENT)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"No user event found with id={id}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
