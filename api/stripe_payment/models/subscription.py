from email.policy import default
from django.db import models
from django.conf import settings

from core.models.general import TimeStampedUUIDModel
from stripe_payment.models.stripe_customer import StripeCustomer
from stripe_payment.models.stripe_product import StripeProduct

CURRENCY_CHOICES = [
    ('CAD', 'CAD'),
    ('US', 'US')
]

RECURRING_INTERVAL_CHOICES = [
    ('DAILY', 'DAILY'),
    ('WEEKLY', 'WEEKLY'),
    ('MONTHLY', 'MONTHLY'),
    ('YEARLY', 'YEARLY'),
]


class SubscribePlan(TimeStampedUUIDModel):
    stripe_product = models.ForeignKey(
        StripeProduct, on_delete=models.CASCADE, related_name='subscribe_plan')
    currency = models.CharField(max_length=10, choices=CURRENCY_CHOICES, default="CAD")
    recurring_payment_value = models.FloatField()
    recurring_interval = models.CharField(max_length=10, choices=RECURRING_INTERVAL_CHOICES)

    def __str__(self):
        return self.stripe_product.name

    class Meta:
        verbose_name_plural = "Subscribe Plans"
        ordering = ('stripe_product__name',)


class Subscriber(TimeStampedUUIDModel):
    customer = models.ForeignKey(StripeCustomer, on_delete=models.CASCADE,
                                 related_name='subscriber_customer')
    subscribe_plan = models.ForeignKey(
        SubscribePlan, on_delete=models.CASCADE, related_name='subscrber_plan')
    stripe_subscription_id = models.CharField(max_length=256)

    def __str__(self):
        return f"{self.customer.user.email} {self.subscribe_plan.plan_name}"

    class Meta:
        verbose_name_plural = "Subscribers"
        ordering = ('subscribe_plan__stripe_product__name', 'customer__user__email',)
