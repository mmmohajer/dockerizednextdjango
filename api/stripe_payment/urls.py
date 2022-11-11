from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'subscribe-plan', views.SubscribePlanViewSet, basename='subscribe-plan')

urlpatterns = [
    path('', include(api_router.urls)),
    path('create-payment-intent/', views.CreatePaymentIntentViewSet),
    path('retrieve-payment-intent/', views.RetrievePaymentIntentViewSet),
    path('create-setup-intent/', views.CreateSetupIntentViewSet),
    path('retrieve-setup-intent/', views.RetrieveSetupIntentViewSet),
    path('general-webhook/', views.GeneralWebhookViewSet),
    path('create-stripe-customer/', views.CreateStripeCustomerViewSet),
    path('retrieve-stripe-customer/', views.RetrieveStripeCustomerViewSet),
    path('add-active-card-to-stripe-customer/', views.AddActiveCardToStripeCustomerViewSet),
    path('stripe-customer-source-handler/', views.CustomerSourceHandlerViewSet),
    path('create-stripe-product/', views.CreateStripeProductViewSet),
    path('retrieve-stripe-product/', views.RetrieveStripeProductViewSet),
    path('create-subscription/', views.CreateSubscriptionViewSet)
]
