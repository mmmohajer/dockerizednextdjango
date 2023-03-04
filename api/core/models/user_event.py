from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel
from core.models.profile import Profile

EVENT_CHOICES = [
    ('opened_the_app', 'Opened The App'),
    ('sent_login_req', 'Sent Login Req'),
]


class UserEvent(TimeStampedUUIDModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='user_event', null=True, blank=True)
    ip_address = models.CharField(max_length=256, null=True, blank=True)
    city = models.CharField(max_length=256, null=True, blank=True)
    region = models.CharField(max_length=256, null=True, blank=True)
    country = models.CharField(max_length=256, null=True, blank=True)
    timezone = models.CharField(max_length=256, null=True, blank=True)
    event = models.CharField(max_length=256, choices=EVENT_CHOICES)
    success = models.BooleanField(default=True)

    def __str__(self):
        return self.event

    class Meta:
        verbose_name_plural = "User Events"
        ordering = ('-created_at',)
