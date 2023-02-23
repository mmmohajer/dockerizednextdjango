from django.contrib import admin


class UserEventAdmin(admin.ModelAdmin):
    autocomplete_fields = ['profile']
    list_display = ['profile', 'event', 'ip_address']
    list_per_page = 10
    list_select_related = ['profile']
    search_fields = ['email']
    list_filter = ['event']
