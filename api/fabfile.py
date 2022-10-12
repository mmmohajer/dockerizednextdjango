import re
import os

import django
import stripe


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.conf import settings
from core import utils as coreUtils

stripe.api_key = settings.STRIPE_SECRET_KEY

MANAGE_CALL = 'python manage.py'

def createNewGroup():
    coreUtils.createNewGroup()

def remove_old_captcha():
    coreUtils.remove_old_captcha()

def make_automatic_payment_for_subscribers():
    customer_id = "cus_MY572eMgNVdFHo"
    payment_method_id = "pm_1LpfykBjlQ77ZngHCr8Aq0QP"
    # See all available payment methods
    payment_methods = stripe.PaymentMethod.list(customer=customer_id, type="card")
    print(payment_methods)
    try:
        payment = stripe.PaymentIntent.create(amount=1500, currency='cad', customer=customer_id, payment_method=payment_method_id, off_session=True, confirm=True)
        print(payment)
    except stripe.error.CardError as e:
        err = e.error
        # Error code will be authentication_required if authentication is needed
        print("Code is: %s" % err.code)
        payment_intent_id = err.payment_intent['id']
        payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)
    return