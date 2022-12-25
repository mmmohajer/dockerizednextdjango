import os

import django


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

MANAGE_CALL = 'python manage.py'

from fab_commands import *