# Copyright 2022 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

import re
from django.test import TestCase
from app_name.templatetags.vite import vite_styles


class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

#    def test_something_that_will_fail(self):
#        self.assertTrue(False)

    def test_templatetag_vite_styles(self):
        entries = ('app_name_vue/main.js',)
        link = vite_styles(*entries)
        pattern = re.compile("<link rel=\"stylesheet\" href=\"/static/app_name/assets/main\.[\d\w]*\.css\" />")
        self.assertTrue(pattern.match(link))
