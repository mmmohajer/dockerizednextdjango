from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel


class NotificationToken(TimeStampedUUIDModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='user_expo_notification_token')
    token = models.CharField(max_length=256)

    def __str__(self):
        return f"{self.user}-{self.token}"

    class Meta:
        verbose_name_plural = "Notification Tokens"
        ordering = ('-created_at',)
