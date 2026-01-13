# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.conf import settings
from django.views.generic import TemplateView


class PageView(TemplateView):
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        return self.render_to_response({"context_data": context})

    def get_context_data(self, **kwargs):
        context = {}
        context["debugMode"] = settings.DEBUG
        context["googleAnalyticsKey"] = settings.GOOGLE_ANALYTICS_KEY
        context["clarityProjectId"] = settings.CLARITY_PROJECT_ID
        return context


class DefaultPageView(PageView):
    template_name = "index.html"
