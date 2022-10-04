from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel


class StripeCustomer(TimeStampedUUIDModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='stripe_customer')
    stripe_customer_id = models.CharField(max_length=256)

    def __str__(self):
        return self.user.email

    class Meta:
        verbose_name_plural = "Stripe Customers"
        ordering = ('user__email',)
