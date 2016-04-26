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
import json
import urllib2


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

        mapbox_params = {
            'url': 'https://api.mapbox.com/geocoding/v5/mapbox.places',
            'token': 'pk.eyJ1Ijoic2lkaGFydGEiLCJhIjoiY2ltczg2OW1yMDFpNHZsbTR6MWs5ZHlwbSJ9.T5h2oS8vItUFM9__uoRvaA',
            'lng': crumb.lng,
            'lat': crumb.lat
        }

        mapbox_url = '{url}/{lng},{lat}.json?access_token={token}&types=address'.format(**mapbox_params)
        response = json.load(urllib2.urlopen(mapbox_url))
        crumb.place = response['features'][0]['place_name']

        crumb.put()
        return make_empty_ok_response()
