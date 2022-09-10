import os
from pathlib import Path
import environ

BASE_DIR = Path(__file__).resolve().parent.parent
environ.Env.read_env(BASE_DIR / ".env")

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
