from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel


class SetupIntent(TimeStampedUUIDModel):
    setup_intent_id = models.CharField(max_length=256)

    def __str__(self):
        return self.setup_intent_id

    class Meta:
        verbose_name_plural = "Setup Intents"
        ordering = ('-created_at',)
