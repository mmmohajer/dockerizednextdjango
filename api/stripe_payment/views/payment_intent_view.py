# In order to get more information about how to perform CRUD for a stripe
# Customer visit: https://stripe.com/docs/api/customers

# In order to get more information about how to perform CRUD for a stripe
# Payment Intent visit: https://stripe.com/docs/api/payment_intents/object

# In order to build webhooks, visit the following link:
# https://dashboard.stripe.com/webhooks/create?endpoint_location=local&events=payment_intent.succeeded

from django.shortcuts import get_object_or_404
from django.conf import settings
from requests import delete
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe

from stripe_payment.models import StripeCustomerModel, PaymentIntentModel
from stripe_payment.serializers import PaymentIntentSerializer

User = get_user_model()

stripe.api_key = settings.STRIPE_SECRET_KEY


class CreatePaymentIntentViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        try:
            amount = int(request.data.get("amount", 0) * 100)
            if request.user and amount:
                stripe_customer_qs = StripeCustomerModel.objects.filter(
                    user__email=request.user.email)
                if not stripe_customer_qs.count():
                    current_customer = stripe.Customer.create(
                        email=request.user.email, name=f"{request.user.first_name} {request.user.last_name}")
                    new_stripe_customer_model = StripeCustomerModel()
                    new_stripe_customer_model.user = request.user
                    new_stripe_customer_model.stripe_customer_id = current_customer.id
                    new_stripe_customer_model.save()
                else:
                    current_customer = stripe.Customer.retrieve(
                        stripe_customer_qs[0].stripe_customer_id)
                metadata = {
                    "id": "1234556678",
                    "quantity": 2,
                    "order_is_confirmed": False
                }
                intent = stripe.PaymentIntent.create(
                    amount=amount, currency="cad", automatic_payment_methods={"enabled": True}, metadata=metadata, customer=current_customer)
                return response.Response(status=status.HTTP_200_OK, data={"client_secret": intent["client_secret"]})
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": "Only an authenticated user can have payment to our system. Also, the amount must a number greater than zero."})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": str(e)})


class PaymentIntentWebhookViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        endpoint_secret = settings.STRIPE_PAYMENT_INTENT_WEBHOOK_SECRET
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
            new_payment_intent = PaymentIntentModel()
            new_payment_intent.payment_intent_id = payment_intent.id
            new_payment_intent.save()
            stripe.PaymentIntent.modify(payment_intent.id, metadata={"order_is_confirmed": True})
            serializer = PaymentIntentSerializer(new_payment_intent)
            return response.Response(status=status.HTTP_200_OK, data={"payment_intent_details": serializer.data})
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
