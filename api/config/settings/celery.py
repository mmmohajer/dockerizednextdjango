from celery.schedules import crontab
import os

CELERY_BROKER_URL = 'redis://redis:6379/1'

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
    }
}
