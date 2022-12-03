from flask_restx import Namespace, Resource, fields
# flask imports 
from flask import jsonify, Response 
import googlemaps 

from dotenv import load_dotenv, find_dotenv 
import os 
import requests 

# locate the env file for secured informations 
load_dotenv(find_dotenv())

api = Namespace('GoogleMap ', description='Getting the google map information, mainly rating, location, and reviews')

# accessing the google map api 
G_KEY = os.getenv("GOOGlE_API_K")


# routing the page w/ the frontend 
@api.route('/search/<string:place_loc')

# setting up the class 
class mapLookup(Resource):
    def get(self, place_loc):
        loc = get_place_loc(place_loc)
        if loc == None or loc == "":
            return Response(status=400) # no location found
         
        rating_ls, dist_ls = get_nearby_coffee(loc)
        return rating_ls, dist_ls
    

gmaps = googlemaps.Client(key= G_KEY)


# Google API requires place_id to get the information near by the location  
def get_place_loc(place_name):
    # use the api key to get the place id of the coffee house near the user 
    # e.g place_name = "848 beacon street Boston"
    loc =  gmaps.geocode(place_name)
    #isolate the location latitude and longitude
    loc = str(loc[0]['geometry']['location']['lat']) + "," + str(loc[0]['geometry']['location']['lng'])
    return loc 
    
            
def get_place_info(place_id):
    # use the place id to get the rating, review, location, hours of the coffee house 
    # e.g place_id = "ChIJmQwZgjKu44kRnFv0fXzW8pI"
    
    # find the reviews, opening hours of the coffee house
    url = url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id + "&fields=name%2Crating%2Cformatted_phone_number%2copening_hours%2cwebsite&key=" + G_KEY 
    payload = {}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    # isolate the values: phone number, name, weekday_text, rating, website 
    # check if it has phone number, if not, set it as None 
    if 'formatted_phone_number' in response.json()['result']:
        phone_num = response.json()['result']['formatted_phone_number']
    else: 
        phone_num = None

    name = response.json()['result']['name']
    weekday_text = response.json()['result']['opening_hours']['weekday_text']
    
    # encode \u202, \u2009 into characters
    weekday_text = [x.encode('ascii', 'ignore').decode("utf-8") for x in weekday_text]
    # replace 12:00 with 12:00AM
    weekday_text = [x.replace("12:00", "12:00AM") for x in weekday_text]
    # insert - after AM 
    weekday_text = [x.replace("AM", "AM - ") for x in weekday_text]
    rating = response.json()['result']['rating']
    
    # check if it has website, if not, set it as None
    if 'website' in response.json()['result']:
        website = response.json()['result']['website']
    else: 
        website = None 
    # reformat into a new json file, return it 
    info = {"Name": name,"Phone number": phone_num, "Weekday Hours": weekday_text, "Rating": rating, "Website": website}
    return info 
    

def get_nearby_coffee(loc ):
    # set up params for the google api : name, phone number, weekday_text, rating, website  
    params = {
        'radius': 1000,
        'location': loc,
        'open_now': True,
        'keyword': 'coffee'
    }
    gmapz = gmaps.places_nearby(**params)
    # filer out the coffee house that does not have rating 
    gmapz_rating = [x for x in gmapz['results'] if 'rating' in x]

    # sort the rating by TOP 5 highest to lowest 
    gmapz_rating = sorted(gmapz_rating, key=lambda x: x['rating'], reverse=True)[:5]

    # filter out the coffee house that does not have location 
    gmapz_rating_loc = [x for x in gmapz_rating if 'geometry' in x]
    #sort the distance by top 5 closest, using distance formula 
    gmapz_rating_loc = sorted(gmapz_rating_loc, key=lambda x: (x['geometry']['location']['lat'] - float(loc.split(",")[0]))**2 + (x['geometry']['location']['lng'] - float(loc.split(",")[1]))**2)[:5]

    dist_ls = [] 
    rating_ls = [] 

    for item in gmapz_rating:
        # add it to rating_dict 
        dist_ls.append(get_place_info(item['place_id']))

    for item in gmapz_rating_loc:
        # add it to rating_dict 
        rating_ls.append(get_place_info(item['place_id']))

    return rating_ls, dist_ls

# create a new mapLookup object 
temp = mapLookup("848 beacon street Boston")
print(temp.get("848 beacon street Boston"))