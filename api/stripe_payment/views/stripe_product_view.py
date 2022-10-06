from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
import stripe

from core.permissions import IsAdminOrReadOnly
from stripe_payment.models import StripeProductModel
from stripe_payment.serializers import StripeProductSerializer

User = get_user_model()

stripe.api_key = settings.STRIPE_SECRET_KEY


class CreateStripeProductViewSet(views.APIView):
    permission_classes = [IsAdminOrReadOnly]

    def post(self, request, format=None):
        product_name = request.data.get("product_name", "")
        if product_name:
            try:
                cur_product_qs = StripeProductModel.objects.filter(name=product_name)
                if cur_product_qs.count():
                    return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"The product {product_name} already exists!"})
                created_product = stripe.Product.create(name=product_name)
                new_product_model = StripeProductModel()
                new_product_model.name = product_name
                new_product_model.stripe_product_id = created_product.id
                new_product_model.save()
                serializer = StripeProductSerializer(new_product_model)
                return response.Response(status=status.HTTP_200_OK, data={"data": serializer.data})
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Product name is a required field"})


class RetrieveStripeProductViewSet(views.APIView):
    permission_classes = [IsAdminOrReadOnly]

    def post(self, request, format=None):
        product_id = request.data.get("product_id", "")
        if product_id:
            try:
                cur_product = stripe.Product.retrieve(product_id)
                return response.Response(status=status.HTTP_200_OK, data={"payload": cur_product})
            except Exception as e:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Product id is a required field"})
