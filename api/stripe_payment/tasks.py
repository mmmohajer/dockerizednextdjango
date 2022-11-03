from celery import shared_task
from django.conf import settings
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

# ----------------------------------------------
# Periodic Tasks
# ----------------------------------------------


# @shared_task
# def test_periodic_task(first_name, last_name):
#     print(f"{first_name} {last_name}")
#     return

@shared_task
def make_automatic_payment_for_subscribers():
    payment_methods = stripe.PaymentMethod.list(customer="cus_MjaTP9lSZXxH5L", type="card")
    print(payment_methods)
    return
