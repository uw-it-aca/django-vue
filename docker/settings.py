from .base_settings import *

INSTALLED_APPS += [
    'app_name.apps.AppNameConfig',
    # 'webpack_loader',
]

# Location of stats file that can be accessed during local development and
# collected from during production build process
"""
if os.getenv("ENV") == "localdev":
    WEBPACK_LOADER = {
        'DEFAULT': {
            'STATS_FILE': os.path.join(BASE_DIR, 'app_name/static/webpack-stats.json'),
        }
    }
else:
    WEBPACK_LOADER = {
        'DEFAULT': {
            'STATS_FILE': os.path.join(BASE_DIR, '/static/webpack-stats.json'),
        }
    }
"""
# If you have file data, define the path here
# DATA_ROOT = os.path.join(BASE_DIR, "app_name/data")

GOOGLE_ANALYTICS_KEY = os.getenv("GOOGLE_ANALYTICS_KEY", default=" ")

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'APP_DIRS': True,
        'OPTIONS': {
            'debug':  True,
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'app_name.context_processors.google_analytics',
                'app_name.context_processors.django_debug',
            ],
        }
    }
]

# Vite App Dir: point it to the folder your vite app is in.
VITE_APP_DIR =  os.path.join(BASE_DIR, '/app_name_vue')

# You may change these, but it's important that the dist folder is includedself.
# If it's not, collectstatic won't copy your bundle to production.

STATIC_URL = "/static/"
STATICFILES_DIRS = [
    # os.path.join(VITE_APP_DIR, "dist"),
    # "/app_name/static/app_name/",
]

# STATIC_ROOT = os.path.join(BASE_DIR, '/staticfiles')


if os.getenv("ENV") == "localdev":
    DEBUG = True
