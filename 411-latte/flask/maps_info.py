from flask_restx import Namespace, Resource, fields
from flask import jsonify

api = Namespace('Google Map ', description='Getting the google map information, mainly rating, location, and reviews')

# coffee_place = api.model('rating', {
#     'reviews':fields.String(required=True, description='Looking for the map')
# })

@api.route('/search/<string:rating>')
class ratingLookup(Resource):
    def get(self, rating):
        return {
            'rating': rating,
            'temp': "temp"
            }

        # Later on, we can store a list of valid coffee houses and then choose the closest match