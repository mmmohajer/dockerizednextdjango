from enum import unique
from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel


class StripeProduct(TimeStampedUUIDModel):
    name = models.CharField(max_length=256, unique=True)
    stripe_product_id = models.CharField(max_length=256)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Stripe Products"
        ordering = ('name',)
