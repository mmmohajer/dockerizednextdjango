from django.urls import path

from websocket.consumers import PublicChatConsumer, PrivateChatConsumer

URL_PATHS = [
    path("wss/public-chat/", PublicChatConsumer.as_asgi()),
    path("wss/private-chat/", PrivateChatConsumer.as_asgi())
]
