from django.shortcuts import get_object_or_404
from django.conf import settings
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
            save_card_for_future_usage = request.data.get("save_card_for_future_usage", False)
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
                if save_card_for_future_usage:
                    intent = stripe.PaymentIntent.create(
                        amount=amount, currency="cad", automatic_payment_methods={"enabled": True}, metadata=metadata, customer=current_customer, setup_future_usage="off_session")
                else:
                    intent = stripe.PaymentIntent.create(
                        amount=amount, currency="cad", automatic_payment_methods={"enabled": True}, metadata=metadata, customer=current_customer)
                return response.Response(status=status.HTTP_200_OK, data={"client_secret": intent["client_secret"]})
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Only an authenticated user can have payment to our system. Also, the amount must a number greater than zero."})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


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
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You must provide the id of payment intent"})
