import os

ASGI_APPLICATION = 'config.asgi.application'

WITHOUT_DOCKER = bool(int(os.environ.get('WITHOUT_DOCKER', 0)))

REDIS_USER_PASS = os.environ.get('REDIS_USER_PASS', 'RedisUserPass')

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
                "hosts": [(f"redis://:{REDIS_USER_PASS}@redis:6379/1")],
            },
        },
    }
