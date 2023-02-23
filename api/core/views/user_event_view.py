from rest_framework import views, viewsets, permissions, response, status

from core.permissions import *
from core.models import UserEventModel, ProfileModel
from core.serializers import UserEventSerializer
from core.utils.auth import get_current_profile
from core.pagination import PaginationType1


class CreateUserEventViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        event = request.data.get(event, "")
        if (event):
            try:
                cur_profile = get_current_profile(request)
                cur_event_model = UserEventModel()
                if cur_profile:
                    cur_event_model.profile = cur_profile
                cur_event_model.ip_address = request.data.get("ip_address", None)
                cur_event_model.city = request.data.get("city", None)
                cur_event_model.region = request.data.get("region", None)
                cur_event_model.country = request.data.get("country", None)
                cur_event_model.timezone = request.data.get("timezone", None)
                cur_event_model.save()
                serializer = UserEventSerializer(cur_event_model)
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"event is a required field"})
