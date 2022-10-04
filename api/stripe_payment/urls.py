from django.urls import path, include
from rest_framework import routers

from . import views

urlpatterns = [
    path('create-payment-intent/', views.CreatePaymentIntentViewSet),
    path('payment-intent-webhook/', views.PaymentIntentWebhookViewSet),
    path('retrieve-payment-intent/', views.RetrievePaymentIntentViewSet)
]
