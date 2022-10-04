from rest_framework import serializers

from stripe_payment.models import PaymentIntentModel


class PaymentIntentSerializer(serializers.ModelSerializer):

    class Meta:
        model = PaymentIntentModel
        fields = ['id', 'uuid', 'payment_intent_id', 'created_at', 'updated_at']
