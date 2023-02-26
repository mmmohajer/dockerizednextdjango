import stripe
from django.conf import settings

from core import utils as coreUtils
from core.utils.check_funcs import create_pdf

stripe.api_key = settings.STRIPE_SECRET_KEY


def createNewGroup():
    coreUtils.createNewGroup()


def remove_old_captcha():
    coreUtils.remove_old_captcha()


def remove_old_unsuccessful_login_attempts():
    coreUtils.remove_old_unsuccessful_login_attempts()


def get_automatic_payment_for_subscribers():
    payment_methods = stripe.PaymentMethod.list(customer="cus_MjaTP9lSZXxH5L", type="card")
    print(payment_methods)
    return


def make_automatic_payment_for_subscribers():
    customer_id = "cus_MjaTP9lSZXxH5L"
    payment_method_id = "pm_1M07IXBjlQ77ZngHdlV0wKW9"
    # See all available payment methods
    payment_methods = stripe.PaymentMethod.list(customer=customer_id, type="card")
    print(payment_methods)
    try:
        payment = stripe.PaymentIntent.create(
            amount=1500, currency='cad', customer=customer_id, payment_method=payment_method_id, off_session=True, confirm=True)
        print(payment)
    except stripe.error.CardError as e:
        err = e.error
        # Error code will be authentication_required if authentication is needed
        print("Code is: %s" % err.code)
        payment_intent_id = err.payment_intent['id']
        payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)
    return


def create_charge_for_customer():
    try:
        charge = stripe.Charge.create(amount=2000, currency="cad", customer="cus_MjaTP9lSZXxH5L")
        print(charge)
    except stripe.error.CardError as e:
        print(e)
        err = e.error
        # Error code will be authentication_required if authentication is needed
        print("Code is: %s" % err.code)
    return


def retrieve_customer():
    try:
        current_customer = stripe.Customer.retrieve("cus_MjaTP9lSZXxH5L")
        current_customer = stripe.Customer.list_sources(
            "cus_MjaTP9lSZXxH5L",
            object="card",
            limit=10,
        )
        print(current_customer)
    except stripe.error.CardError as e:
        print(e)
        err = e.error
        # Error code will be authentication_required if authentication is needed
        print("Code is: %s" % err.code)
    return


def create_customer_card():
    try:
        current_customer_card = stripe.Customer.create_source(
            "cus_MjaTP9lSZXxH5L",
            source="tok_1M2MCaBjlQ77ZngHUT4Ccq0e"
        )
        print(current_customer_card)
    except stripe.error.CardError as e:
        print(e)
        err = e.error
        # Error code will be authentication_required if authentication is needed
        print("Code is: %s" % err.code)
    return


def create_pdf_test():
    create_pdf()


def send_push_message():
    coreUtils.send_push_message()


def is_access_token_valid():
    res = coreUtils.is_access_token_valid(
        token="TEST_TOKEN")
    print(res)


def is_refresh_token_valid():
    res = coreUtils.is_refresh_token_valid(
        token="TEST_TOKEN")
    print(res)
