from flask import Flask, Blueprint
from flask_restx import Resource, Api, Namespace, fields
from .cafe_locations import api as maps
from .image_item import api as image

# https://flask-restx.readthedocs.io/en/latest/scaling.html

api = Api(
    title='My Title',
    version='1.0',
    description='A description',
    # All API metadatas
)

api.add_namespace(maps, path='/api/maps')
api.add_namespace(image, path='/api/image')