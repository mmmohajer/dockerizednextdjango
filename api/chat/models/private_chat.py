from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel


class PrivateChatRoom(TimeStampedUUIDModel):
    user1 = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE, related_name="user1")
    user2 = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE, related_name="user2")
    is_active = models.BooleanField(default=True)

    @property
    def group_name(self):
        return f"PrivateChatRoom-{self.id}"

    def __str__(self):
        return f"{self.user1}-{self.user2}"


class PrivateChatRoomMessageManager(models.Manager):
    def by_room(self, room):
        qs = PrivateChatRoomMessage.objects.filter(room=room).order_by("-created_at")
        return qs


class PrivateChatRoomMessage(TimeStampedUUIDModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    room = models.ForeignKey(PrivateChatRoom, on_delete=models.CASCADE)
    message = models.TextField(unique=False, blank=False)

    objects = PrivateChatRoomMessageManager()

    def __str__(self):
        return self.message
