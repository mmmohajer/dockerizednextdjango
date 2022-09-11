import os

ASGI_APPLICATION = 'config.asgi.application'

WITHOUT_DOCKER = bool(int(os.environ.get('WITHOUT_DOCKER', 0)))

if WITHOUT_DOCKER:
    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels.layers.InMemoryChannelLayer"
        }
    }

if not WITHOUT_DOCKER:
    CHANNEL_LAYERS = {
        "default": {
            "BACKEND": "channels_redis.core.RedisChannelLayer",
            "CONFIG": {
                "hosts": [("redis", 6379)],
            },
        },
    }
