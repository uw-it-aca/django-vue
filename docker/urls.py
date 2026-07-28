from django.conf.urls import include
from django.urls import re_path

from .base_urls import *

urlpatterns += [re_path(r'^', include('app_name.urls'))]
