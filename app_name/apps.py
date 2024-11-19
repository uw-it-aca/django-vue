# Copyright 2024 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.apps import AppConfig
from django.contrib.staticfiles.apps import StaticFilesConfig


class MyStaticFilesConfig(StaticFilesConfig):
    ignore_patterns = ['CVS', '*~']

class AppNameConfig(AppConfig):
    name = "app_name"
