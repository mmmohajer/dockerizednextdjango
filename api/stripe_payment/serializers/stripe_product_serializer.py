from rest_framework import serializers

from stripe_payment.models import StripeProductModel


class StripeProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = StripeProductModel
        fields = ['id', 'uuid', 'name', 'stripe_product_id', 'created_at', 'updated_at']
