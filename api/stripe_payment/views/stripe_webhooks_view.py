from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe

from core.utils import create_pdf
from stripe_payment.models import PaymentIntentModel, SetupIntentModel
from stripe_payment.serializers import PaymentIntentSerializer

User = get_user_model()

stripe.api_key = settings.STRIPE_SECRET_KEY


class GeneralWebhookViewSet(views.APIView):
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
            create_pdf()
            return response.Response(status=status.HTTP_200_OK, data={"payment_intent_details": serializer.data})
        if event['type'] == 'setup_intent.succeeded':
            setup_intent = event['data']['object']
            new_setup_intent = SetupIntentModel()
            new_setup_intent.setup_intent_id = setup_intent.id
            new_setup_intent.save()
            stripe.SetupIntent.modify(setup_intent.id, metadata={"order_is_confirmed": True})
            return response.Response(status=status.HTTP_200_OK)
        return response.Response(status=status.HTTP_200_OK)
