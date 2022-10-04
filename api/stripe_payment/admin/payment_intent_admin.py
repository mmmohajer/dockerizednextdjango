from django.contrib import admin


class PaymentIntentAdmin(admin.ModelAdmin):
    list_display = ['payment_intent_id', 'created_at']
    list_per_page = 10
    search_fields = ['payment_intent_id__istartswith']
