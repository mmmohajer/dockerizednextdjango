from rest_framework import views, viewsets, permissions, response, status

from core.permissions import *
from core.models import NotificationTokenModel
from core.serializers import NotificationTokenSerializer
from core.pagination import PaginationType1


class NotificationTokenViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        token = request.data.get("token")
        if (token):
            try:
                notification_token_qs = NotificationTokenModel.objects.filter(
                    user_id=request.user.id, token=token)
                if notification_token_qs.count():
                    serializer = NotificationTokenSerializer(notification_token_qs, many=True)
                    return response.Response(status=status.HTTP_200_OK, data=serializer.data)
                else:
                    cur_notification_token = NotificationTokenModel()
                    cur_notification_token.user = request.user
                    cur_notification_token.token = token
                    cur_notification_token.save()
                    serializer = NotificationTokenSerializer(cur_notification_token)
                    return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Token is a required field"})
