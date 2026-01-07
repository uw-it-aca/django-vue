# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

import unittest

from django.conf import settings
from django.test import RequestFactory, TestCase
from django.test.utils import override_settings

from app_name.context_processors import (
    auth_user,
    django_debug,
    google_analytics,
)


class ContextProcessorsTest(TestCase):
    def test_google_analytics(self):
        # Test with GOOGLE_ANALYTICS_KEY set
        with override_settings(GOOGLE_ANALYTICS_KEY="ga_key"):
            context = google_analytics(None)
            self.assertEqual(context["google_analytics"], "ga_key")

        # Test without GOOGLE_ANALYTICS_KEY set
        if hasattr(settings, "GOOGLE_ANALYTICS_KEY"):
            delattr(settings, "GOOGLE_ANALYTICS_KEY")
        context = google_analytics(None)
        self.assertEqual(context["google_analytics"], " ")

    def test_django_debug(self):
        # Test with DEBUG set to True
        with override_settings(DEBUG=True):
            context = django_debug(None)
            self.assertTrue(context["django_debug"])

        # Test with DEBUG set to False
        with override_settings(DEBUG=False):
            context = django_debug(None)
            self.assertFalse(context["django_debug"])

    @unittest.skip("auth_user is not implemented")
    def test_auth_user(self):
        # This test will be skipped until auth_user is implemented
        factory = RequestFactory()
        request = factory.get("/")
        context = auth_user(request)
        self.assertIn("username", context)
        self.assertIn("signout_url", context)
