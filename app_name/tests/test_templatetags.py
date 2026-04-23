# Copyright 2026 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

import re
import json
from django.test import TestCase, override_settings
from unittest.mock import patch, mock_open
from app_name.templatetags.vite import vite_styles, vite_scripts


class ViteTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        self.mock_manifest_data = json.dumps({
            "app_name_vue/main.js": {
                "file": "assets/main-123.js",
                "css": ["assets/main-123.css"]
            }
        })

    def tearDown(self):
        # Clean up run after every test method.
        pass

    @patch("app_name.templatetags.vite.open", new_callable=mock_open)
    @override_settings(VITE_MANIFEST_PATH="/static/.vite/manifest.json")
    def test_vite_styles(self, mock_file):
        mock_file.return_value.read.return_value = self.mock_manifest_data
        entries = ("app_name_vue/main.js",)
        link = vite_styles(*entries)

        # Verify it finds the CSS file from the manifest
        pattern = re.compile(
            r'<link\s+[^>]*href="[^"]*main-123\.css[^"]*"[^>]*>'
        )
        self.assertTrue(pattern.search(link))
        mock_file.assert_called_with("/static/.vite/manifest.json")

    @patch("app_name.templatetags.vite.open", new_callable=mock_open)
    @override_settings(VITE_MANIFEST_PATH="/static/.vite/manifest.json")
    def test_vite_scripts(self, mock_file):
        mock_file.return_value.read.return_value = self.mock_manifest_data
        entries = ("app_name_vue/main.js",)
        script = vite_scripts(*entries)

        # Verify it finds the JS file from the manifest
        pattern = re.compile(
            r'<script\s+[^>]*src="[^"]*main-123\.js[^"]*"[^>]*></script>'
        )
        self.assertTrue(pattern.search(script))
        mock_file.assert_called_with("/static/.vite/manifest.json")
