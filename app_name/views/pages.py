# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.conf import settings
from django.views.generic import TemplateView

from app_name.utils.vue_routes import is_valid_vue_route


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
    """
    SPA catch-all view. Serves the Vue app shell for all routes.

    If the requested path does not match a known Vue route (per the
    build-time manifest), the response is served with a 404 status code.
    This gives crawlers/SEO tools the correct signal while still rendering
    the Vue SPA's styled 404 page client-side.
    """

    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        response = self.render_to_response({"context_data": context})

        if not is_valid_vue_route(request.path):
            response.status_code = 404

        return response
