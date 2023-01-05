from django.contrib import admin

from . import public_chat_admin, private_chat_admin
from chat.models import PublicChatRoomModel, PublicChatRoomMessageModel, PrivateChatRoomModel, PrivateChatRoomMessageModel

admin.site.register(PublicChatRoomModel, public_chat_admin.PublicChatRoomAdmin)
admin.site.register(PublicChatRoomMessageModel, public_chat_admin.PublicRoomChatMessageAdmin)
admin.site.register(PrivateChatRoomModel, private_chat_admin.PrivateChatRoomAdmin)
admin.site.register(PrivateChatRoomMessageModel, private_chat_admin.PrivateChatRoomMessageAdmin)
