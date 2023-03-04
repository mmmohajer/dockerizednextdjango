from celery.schedules import crontab
import os

REDIS_USER_PASS = os.environ.get('REDIS_USER_PASS', 'RedisUserPass')

CELERY_BROKER_URL = f"redis://:{REDIS_USER_PASS}@redis:6379/1"

CELERY_TIMEZONE = os.environ.get('API_TIME_ZONE', 'America/Toronto')

CELERY_BEAT_SCHEDULE = {}

# CELERY_BEAT_SCHEDULE = {
#     'test_periodic_task': {
#         'task': 'core.tasks.test_periodic_task',
#         'schedule': 1*10,
#         'args': ['Mohammad', 'Mohajer'],
#     }
# }

CELERY_BEAT_SCHEDULE = {
    'remove_old_captcha_periodic_task': {
        'task': 'core.tasks.remove_old_captcha_periodic_task',
        'schedule': crontab(minute=0, hour=0)
    },
}
