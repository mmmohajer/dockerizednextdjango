from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'subscribe-plan', views.SubscribePlanViewSet, basename='subscribe-plan')

urlpatterns = [
    path('', include(api_router.urls)),
    path('create-payment-intent/', views.CreatePaymentIntentViewSet),
    path('payment-intent-webhook/', views.PaymentIntentWebhookViewSet),
    path('retrieve-payment-intent/', views.RetrievePaymentIntentViewSet),
    path('create-setup-intent/', views.CreateSetupIntentViewSet),
    path('setup-intent-webhook/', views.SetupIntentWebhookViewSet),
    path('retrieve-setup-intent/', views.RetrieveSetupIntentViewSet),
    path('create-stripe-customer/', views.CreateStripeCustomerViewSet),
    path('retrieve-stripe-customer/', views.RetrieveStripeCustomerViewSet),
    path('create-stripe-product/', views.CreateStripeProductViewSet),
    path('retrieve-stripe-product/', views.RetrieveStripeProductViewSet),
    path('create-subscription/', views.CreateSubscriptionViewSet)
]
