from django.db import models

from core.models.general import TimeStampedUUIDModel


class Captcha(TimeStampedUUIDModel):
    captcha = models.CharField(max_length=12)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.captcha

    class Meta:
        verbose_name_plural = "Captchas"
        ordering = ('-created_at',)
