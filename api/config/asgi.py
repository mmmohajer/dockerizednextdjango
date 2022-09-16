"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
import django
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

django.setup()

from websocket.routes import URL_PATHS

DEBUG = bool(int(os.environ.get('DEBUG', 1)))


if DEBUG:
    application = ProtocolTypeRouter({
        "websocket": AllowedHostsOriginValidator(
            AuthMiddlewareStack(
                URLRouter(URL_PATHS)
            )
        ),
    })
else:
    application = ProtocolTypeRouter({
        "http": get_asgi_application,

        "websocket": AllowedHostsOriginValidator(
            AuthMiddlewareStack(
                URLRouter(URL_PATHS)
            )
        ),
    })
