from locale import currency
from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe

from core.permissions import IsAdminOrReadOnly
from core.pagination import PaginationType1
from stripe_payment.models import SubscribePlanModel, StripeCustomerModel, SubscriberModel
from stripe_payment.serializers import SubscribePlanSerializer, SubscriberSerializer

User = get_user_model()

stripe.api_key = settings.STRIPE_SECRET_KEY


class SubscribePlanViewSet(viewsets.ModelViewSet):
    queryset = SubscribePlanModel.objects.all()
    serializer_class = SubscribePlanSerializer
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = PaginationType1


class CreateSubscriptionViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        subscribe_plan_id = request.data.get(subscribe_plan_id)
        if subscribe_plan_id:
            try:
                subscribe_plan_qs = SubscribePlanModel.objects.filter(id=subscribe_plan_id)
                if subscribe_plan_qs.count():
                    selected_subscribe_plan = subscribe_plan_qs.first()
                    cur_customer_qs = StripeCustomerModel.objects.filter(user_id=request.user.id)
                    cur_customer_id = None
                    cur_customer_model = None
                    if not cur_customer_qs.count():
                        current_customer = stripe.Customer.create(
                            email=request.user.email, name=f"{request.user.first_name} {request.user.last_name}")
                        cur_customer_id = current_customer.id
                        new_stripe_customer_model = StripeCustomerModel()
                        new_stripe_customer_model.user = request.user
                        new_stripe_customer_model.stripe_customer_id = current_customer.id
                        new_stripe_customer_model.save()
                        cur_customer_model = new_stripe_customer_model
                    else:
                        cur_customer_id = cur_customer_qs.first().stripe_customer_id
                        cur_customer_model = cur_customer_qs.first()
                    subscription_item = {
                        "price_data": {
                            "currency": selected_subscribe_plan.currency,
                            "product": selected_subscribe_plan.stripe_product.stripe_product_id,
                            "recurring": {
                                "interval": selected_subscribe_plan.recurring_interval,
                                "interval_count": 1
                            },
                            "unit_amount": int(selected_subscribe_plan.recurring_payment_value * 100)

                        }
                    }
                    created_subscription = stripe.Subscription.create(
                        customer=cur_customer_id, items=[subscription_item])
                    new_subscriber = SubscriberModel()
                    new_subscriber.customer = cur_customer_model
                    new_subscriber.subscribe_plan = selected_subscribe_plan
                    new_subscriber.stripe_subscription_id = created_subscription.id
                    new_subscriber.save()
                    serializer = SubscriberSerializer(new_subscriber)
                    return response.Response(status=status.HTTP_200_OK, data={"data": serializer.data})
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "No subscription plan found!"})
            except Exception as e:
                print(e)
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "You must provide the id of payment intent"})
