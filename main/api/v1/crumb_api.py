# coding: utf-8
# pylint: disable=too-few-public-methods, no-self-use, missing-docstring, unused-argument
from flask_restful import Resource

from main import API
from flask import request, g
from pydash import _
from model import Crumb
from api.helpers import make_list_response, make_empty_ok_response
from api.decorators import model_by_key
import util

@API.resource('/api/v1/crumbs')
class CrumbsAPI(Resource):

    def get(self):
        crumbs = Crumb.query().fetch()
        crumbs = [u.to_dict(include=Crumb.get_public_properties()) for u in crumbs]
        return make_list_response(crumbs)

    def post(self):
        new_data = _.pick(request.json, Crumb.get_public_properties())
        crumb = Crumb()
        crumb.populate(**new_data)
        crumb.put()
        return make_empty_ok_response()
