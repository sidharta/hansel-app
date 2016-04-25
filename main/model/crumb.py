# coding: utf-8

from google.appengine.ext import ndb
import model

class Crumb(model.Base):
    """A class describing datastore users."""
    lat = ndb.FloatProperty()
    lng = ndb.FloatProperty()

    PUBLIC_PROPERTIES = ['lat', 'lng']

    PRIVATE_PROPERTIES = []
