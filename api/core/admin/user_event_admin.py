from django.contrib import admin


class UserEventAdmin(admin.ModelAdmin):
    autocomplete_fields = ['user']
    list_display = ['user', 'event', 'ip_address']
    list_per_page = 10
    list_select_related = ['user']
    search_fields = ['email']
    list_filter = ['event']
