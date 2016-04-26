# coding: utf-8

from google.appengine.ext import ndb
import model

class Crumb(model.Base):
    """A class describing Crumbs."""
    code = ndb.StringProperty()
    lat = ndb.FloatProperty()
    lng = ndb.FloatProperty()
    place = ndb.StringProperty( required = False )

    PUBLIC_PROPERTIES = ['code', 'lat', 'lng', 'place']

    PRIVATE_PROPERTIES = []
