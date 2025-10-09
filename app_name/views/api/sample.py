# Copyright 2025 UW-IT, University of Washington
# SPDX-License-Identifier: Apache-2.0

from app_name.views.api import RESTDispatch
from django.core.exceptions import ObjectDoesNotExist


class SampleAPI(RESTDispatch):
    def get(self, request):
        try:
            samplejson = {'json': 'sample'}
            return self.json_response(samplejson)
        except ObjectDoesNotExist as ex:
            return self.error_response(404, "JSON not found")
