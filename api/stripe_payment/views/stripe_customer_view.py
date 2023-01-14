from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe

from core.permissions import IsAdminOrReadOnly
from stripe_payment.models import StripeCustomerModel

User = get_user_model()

stripe.api_key = settings.STRIPE_SECRET_KEY


class CreateStripeCustomerViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        stripe_customer_qs = StripeCustomerModel.objects.filter(user__email=request.user.email)
        current_customer = None
        try:
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
            return response.Response(status=status.HTTP_200_OK, data={"payload": current_customer})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class RetrieveStripeCustomerViewSet(views.APIView):
    permission_classes = [IsAdminOrReadOnly]

    def post(self, request, format=None):
        customer_id = request.data.get("customer_id", "")
        if customer_id:
            try:
                current_customer = stripe.Customer.retrieve(customer_id)
                return response.Response(status=status.HTTP_200_OK, data={"payload": current_customer})
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Customer id is a required field"})


class AddActiveCardToStripeCustomerViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        token = request.data.get("token", "")
        stripe_customer_qs = StripeCustomerModel.objects.filter(user__email=request.user.email)
        current_customer = None
        try:
            if not stripe_customer_qs.count():
                current_customer = stripe.Customer.create(
                    email=request.user.email, name=f"{request.user.first_name} {request.user.last_name}")
                new_stripe_customer_model = StripeCustomerModel()
                new_stripe_customer_model.user = request.user
                new_stripe_customer_model.stripe_customer_id = current_customer.id
                new_stripe_customer_model.save()
                if token:
                    try:
                        new_customer_card = stripe.Customer.create_source(
                            current_customer.id,
                            source=token
                        )
                    except Exception as e:
                        print(e)
            else:
                current_customer = stripe.Customer.retrieve(
                    stripe_customer_qs[0].stripe_customer_id)
                if token:
                    try:
                        new_customer_card = stripe.Customer.create_source(
                            current_customer.id,
                            source=token
                        )
                    except Exception as e:
                        print(e)
            return response.Response(status=status.HTTP_200_OK, data={"payload": current_customer})
        except Exception as e:
            print(e)
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class CustomerSourceHandlerViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        stripe_customer_qs = StripeCustomerModel.objects.filter(user__email=request.user.email)
        current_customer = None
        try:
            if stripe_customer_qs.count():
                current_customer = stripe.Customer.retrieve(
                    stripe_customer_qs[0].stripe_customer_id)
                available_customer_sources = stripe.Customer.list_sources(
                    current_customer.id,
                    object="card",
                    limit=10,
                )
                return response.Response(status=status.HTTP_200_OK, data={"active_sources": available_customer_sources, "default_source": current_customer.default_source})
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You are registered as a stripe cutomer!"})
        except Exception as e:
            print(e)
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})

    def post(self, request, format=None):
        default_source_id = request.data.get("default_source_id", "")
        stripe_customer_qs = StripeCustomerModel.objects.filter(user__email=request.user.email)
        current_customer = None
        if default_source_id:
            try:
                if stripe_customer_qs.count():
                    current_customer = stripe.Customer.retrieve(
                        stripe_customer_qs[0].stripe_customer_id)
                    updated_customer = stripe.Customer.modify(
                        current_customer.id,
                        default_source=default_source_id,
                    )
                    return response.Response(status=status.HTTP_200_OK, data={"payload": updated_customer})
                else:
                    return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You are registered as a stripe cutomer!"})
            except Exception as e:
                print(e)
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You must pass a default source id with this request!"})
