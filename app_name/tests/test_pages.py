# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.test import TestCase, override_settings
from django.urls import reverse


class PageTest(TestCase):
    @override_settings(
        GOOGLE_ANALYTICS_KEY="test-ga-key",
        CLARITY_PROJECT_ID="test-clarity-id",
        DEBUG=True,
    )
    def test_page_context(self):
        url = reverse("index")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

        context_data = response.context.get("context_data")
        self.assertIsNotNone(context_data)

        self.assertIn("debugMode", context_data)
        self.assertEqual(context_data.get("debugMode"), True)

        self.assertIn("googleAnalyticsKey", context_data)
        self.assertEqual(context_data.get("googleAnalyticsKey"), "test-ga-key")

        self.assertIn("clarityProjectId", context_data)
        self.assertEqual(
            context_data.get("clarityProjectId"), "test-clarity-id"
        )
