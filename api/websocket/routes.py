from django.urls import path

from websocket.consumers import PublicChatConsumer

URL_PATHS = [
    path("wss/public-chat/", PublicChatConsumer.as_asgi())
]
