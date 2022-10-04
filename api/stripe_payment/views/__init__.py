from . import stripe_view

CreatePaymentIntentViewSet = stripe_view.CreatePaymentIntentViewSet.as_view()
PaymentIntentWebhookViewSet = stripe_view.PaymentIntentWebhookViewSet.as_view()
RetrievePaymentIntentViewSet = stripe_view.RetrievePaymentIntentViewSet.as_view()
