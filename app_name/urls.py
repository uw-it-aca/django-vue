# Copyright 2022 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from django.urls import re_path
from app_name.views.pages import PageView

urlpatterns = [re_path(r"^$", PageView.as_view(), name="index")]
