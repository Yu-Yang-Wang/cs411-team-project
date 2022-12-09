from dotenv import load_dotenv, find_dotenv
import json
import os
import pandas as pd
import requests
import tqdm
from pexels_api import API
from flask_restx import Namespace, Resource, fields
# flask imports 
from flask import jsonify, Response 
load_dotenv(find_dotenv())

api = Namespace('image_item', description='Getting the picture of the item from the pexels api')

# routing the page w/ the frontend 
@api.route('/search_item<string:image_item>')

# setting up the class 
class imageLookup(Resource):
    def get(self, image_item):
        img_link = get_image_info(image_item)
        if img_link == None or img_link == "":
            return Response(status=400) # no location found
        return jsonify(IMAGE_LINK = img_link)
#
PEXELS_KEY = os.getenv("PEXEL_K")


def get_image_info(image_item):
    # using the pexels api to get the image of the item
    PAGE_LIMIT = 2
    RESULTS_PER_PAGE = 1

    api_p = API(PEXELS_KEY)
    photos_dict = {}
    page = 1
    counter = 0

    # Getting urls and meta information
    while page < PAGE_LIMIT:
        api_p.search(image_item, page=page, results_per_page=RESULTS_PER_PAGE)
        photos = api_p.get_entries()
        for photo in tqdm.tqdm(photos):
            photos_dict[photo.id] = vars(photo)['_Photo__photo']
            counter += 1
            if not api_p.has_next_page:
                break
            page += 1
            
    api_p.search(image_item, page=page, results_per_page=RESULTS_PER_PAGE)
    photos = api_p.get_entries()
    photos_dict =  photos_dict[photo.id]['src']['small']
    # turn it into a response.json file
    photos_dict = json.dumps(photos_dict)
    
    # get the image url, small size
    return photos_dict
    

