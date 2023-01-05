from django.contrib import admin
from django.contrib import admin
from django.core.paginator import Paginator
from django.core.cache import cache


class PrivateChatRoomAdmin(admin.ModelAdmin):
    list_display = ['id', 'user1', 'user2']
    search_fields = ['id', 'user1__email', 'user2__email']
    readonly_fields = ['id']


# Resource: http://masnun.rocks/2017/03/20/django-admin-expensive-count-all-queries/
class CachingPaginator(Paginator):
    def _get_count(self):
        if not hasattr(self, "_count"):
            self._count = None
        if self._count is None:
            try:
                key = "adm:{0}:count".format(hash(self.object_list.query.__str__()))
                self._count = cache.get(key, -1)
                if self._count == -1:
                    self._count = super().count
                    cache.set(key, self._count, 3600)
            except:
                self._count = len(self.object_list)
            return self._count

    count = property(_get_count)


class PrivateChatRoomMessageAdmin(admin.ModelAdmin):
    list_filter = ['room',  'user', 'created_at']
    list_display = ['room',  'user', 'message', "created_at"]
    search_fields = ['user__email', 'message']
    readonly_fields = ['id', "user", "room", "created_at"]

    show_full_result_count = False
    paginator = CachingPaginator
