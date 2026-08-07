# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.conf import settings
from django.urls import re_path
from django.views.generic import TemplateView

from app_name.views.pages import DefaultPageView

# start with an empty url array
urlpatterns = []

# add debug routes for developing error pages
if settings.DEBUG:
    urlpatterns += [
        re_path(
            r"^500$",
            TemplateView.as_view(template_name="500.html"),
            name="500_response",
        ),
        re_path(
            r"^404$",
            TemplateView.as_view(template_name="404.html"),
            name="404_response",
        ),
    ]

urlpatterns += [

    # add API endpoints here
    # re_path(r'^api/v1/user_pref/$',SomeThing.as_view(), name='user-pref'),

    # Vue SPA catch-all: serves index.html for any route not matched above.
    # Vue Router (with file-based auto-routing) handles client-side navigation.
    re_path(r"^.*$", DefaultPageView.as_view(), name="vue-spa"),
]
