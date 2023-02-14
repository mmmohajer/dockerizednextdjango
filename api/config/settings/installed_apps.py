DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
]

THIRD_PARTY_APPS = [
    'rest_framework',
    'django_filters',
    'django_countries',
    'phonenumber_field',
    'debug_toolbar',
    'djoser',
    'rest_framework_swagger',
    'rest_framework_simplejwt.token_blacklist',
    'channels',
]

LOCAL_APPS = [
    'core',
    'app',
    'like',
    'websocket',
    'chat',
    'stripe_payment'
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS
