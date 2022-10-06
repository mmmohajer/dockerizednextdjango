from rest_framework import serializers

from stripe_payment.models import SubscribePlanModel, SubscriberModel


class SubscribePlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubscribePlanModel
        fields = ['id', 'uuid', 'plan_name', 'recurring_payment_value',
                  'currency', 'recurring_interval', 'created_at', 'updated_at']


class SubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubscriberModel
        fields = ['id', 'uuid', 'customer', 'subscribe_plan',
                  'stripe_subscription_id', 'created_at', 'updated_at']
