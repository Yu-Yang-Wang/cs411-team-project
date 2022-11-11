from flask import Flask, Blueprint
from flask_restx import Resource, Api, Namespace, fields
from apis import map_rating_key
# from .bird import api as birds

# https://flask-restx.readthedocs.io/en/latest/scaling.html

api = Api(
    title='My Title',
    version='1.0',
    description='A description',
    # All API metadatas
)

api.add_namespace(map_rating_key, path="/api/rating")