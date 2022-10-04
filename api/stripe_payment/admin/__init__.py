from django.contrib import admin

from . import payment_intent_admin, stripe_customer_admin
from stripe_payment.models import PaymentIntentModel, StripeCustomerModel

admin.site.register(PaymentIntentModel, payment_intent_admin.PaymentIntentAdmin)
admin.site.register(StripeCustomerModel, stripe_customer_admin.StripeCustomerAdmin)
