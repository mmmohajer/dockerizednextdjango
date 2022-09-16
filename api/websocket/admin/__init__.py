from django.contrib import admin

from . import public_chat_admin
from websocket.models import PublicChatRoomModel, PublicChatRoomMessageModel

admin.site.register(PublicChatRoomModel, public_chat_admin.PublicChatRoomAdmin)
admin.site.register(PublicChatRoomMessageModel, public_chat_admin.PublicRoomChatMessageAdmin)
