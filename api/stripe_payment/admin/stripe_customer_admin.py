from django.contrib import admin


class StripeCustomerAdmin(admin.ModelAdmin):
    autocomplete_fields = ['user']
    list_display = ['user_email', 'user_first_name', 'user_last_name', 'stripe_customer_id']
    list_per_page = 10
    list_select_related = ['user']
    search_fields = ['user__email__istartswith']

    @admin.display(ordering='user__email')
    def user_email(self, stripe_customer):
        return stripe_customer.user.email

    @admin.display(ordering='user__first_name')
    def user_first_name(self, stripe_customer):
        return stripe_customer.user.first_name

    @admin.display(ordering='user__last_name')
    def user_last_name(self, stripe_customer):
        return stripe_customer.user.last_name
