from locale import currency
from unicodedata import name
from django.shortcuts import get_object_or_404
from django.conf import settings
from requests import delete
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe
import json

from stripe_payment.models import StripeCustomerModel

User = get_user_model()

stripe.api_key = "sk_test_51LkX0zBjlQ77ZngHDT4NCSK6GHrr3ZrJdVOhsNOPnIfIiosZajr3S3Ttvzx1tDKHrMzwe80JvuOzgW8qu2cNoE8300qUGpBmEz"


class CreatePaymentIntentViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        try:
            amount = int(request.data.get("amount", 0) * 100)
            if request.user and amount:
                stripe_customer_qs = StripeCustomerModel.objects.filter(
                    user__email=request.user.email)
                if not stripe_customer_qs.count():
                    new_customer = stripe.Customer.create(
                        email=request.user.email, name=f"{request.user.first_name} {request.user.last_name}")
                    new_stripe_customer_model = StripeCustomerModel()
                    new_stripe_customer_model.user = request.user
                    new_stripe_customer_model.stripe_customer_id = new_customer.id
                    new_stripe_customer_model.save()
                metadata = {
                    "id": "1234556678",
                    "quantity": 2
                }
                intent = stripe.PaymentIntent.create(
                    amount=amount, currency="cad", automatic_payment_methods={"enabled": True}, metadata=metadata)
                return response.Response(status=status.HTTP_200_OK, data={"client_secret": intent["client_secret"]})
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": "Only an authenticated user can have payment to our system. Also, the amount must a number greater than zero."})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": str(e)})


class PaymentIntentWebhookViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        endpoint_secret = 'whsec_9254007ed4d37a520fe5caed683d8aa57da5d445a81a0cfbec99456068dfa086'
        payload = request.body
        sig_header = request.headers.get('stripe-signature')
        event = None
        try:
            event = stripe.Webhook.construct_event(payload, sig_header, endpoint_secret)
        except ValueError as e:
            raise e
        except stripe.error.SignatureVerificationError as e:
            raise e
        if event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']
            print(payment_intent)
        return response.Response(status=status.HTTP_200_OK)


class RetrievePaymentIntentViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        client_secret = request.data.get("id")
        if client_secret:
            try:
                data = stripe.PaymentIntent.retrieve(id=client_secret)
                return response.Response(status=status.HTTP_200_OK, data={"payload": data})
            except Exception as e:
                print(e)
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": str(e)})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": "You must provide the id of payment intent"})
