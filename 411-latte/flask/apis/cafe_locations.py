from flask_restx import Namespace, Resource, fields
# flask imports 
from flask import jsonify, Response, request, make_response
import googlemaps 
from dotenv import load_dotenv, find_dotenv 
import os 
import requests 
# locate the env file for secured informations 
import time 

load_dotenv(find_dotenv())

api = Namespace('cafe_locations', description='Getting the google map information of the cafe location')

# accessing the google map api 
G_KEY = os.getenv("GOOGlE_API_K")
# accessing the pexels api

PEXELS_KEY = os.getenv("PEXEL_K")
gmaps = googlemaps.Client(key= G_KEY)

# routing the page w/ the frontend 
@api.route('/search/<string:place_loc>')

# setting up the class 
class mapLookup(Resource):
    def get(self, place_loc):
        loc = get_place_loc(place_loc)
        if loc == None or loc == "":
            return Response(status=400) # no location found
         
        rating_ls, dist_ls = get_nearby_coffee(loc)
        return jsonify(BYRATING =rating_ls, BYDISTANCE = dist_ls)

@api.route('/search/all/<string:place_name>')
class allLookup(Resource):
    def get(self, place_name):
        loc = get_place_loc(place_name)
        if loc == None or loc == "":
            return Response(status=400)
        
        rating_ls, dist_ls = get_nearby_coffee(loc)
        name_ls = get_closest_names(rating_ls, dist_ls)
        # use name_ls to get the pictures of all of them 
        photo_ls = get_pic_all(name_ls)
        # get phone numbers of all of them 
        
        phone_ls = [] 
        review = []
        weekday_ls = []
        website_ls = []
        
        for key in rating_ls:
            place = rating_ls[key]
            phone_ls.append(place['Phone_number'])
            review.append(place['Rating'])
            weekday_ls.append(place['Weekday_Hours'])
            website_ls.append(place['Website'])
            
        for key in dist_ls: 
            place = dist_ls[key] 
            phone_ls.append(place['Phone_number'])
            review.append(place['Rating'])
            weekday_ls.append(place['Weekday_Hours'])
            website_ls.append(place['Website'])

        info = {} 
        info['names'] = name_ls
        info['phone'] = phone_ls
        info['rating'] = review
        #info['weekday'] = weekday_ls
        info['website'] = website_ls
        info['photo'] = photo_ls
        return make_response(info, 200 )

# Google API requires place_id to get the information near by the location  
def get_place_loc(place_name):
    '''
    Receive the input from the answer, after validating it as a valid location, return the lattitude and longtitude of the location
    '''
    # use the api key to get the place id of the coffee house near the user 
    # e.g place_name = "848 beacon street Boston"
    loc =  gmaps.geocode(place_name)
    #isolate the location latitude and longitude
    loc = str(loc[0]['geometry']['location']['lat']) + "," + str(loc[0]['geometry']['location']['lng'])
    return loc 
    
            
def get_place_info(place_id):
    '''
    Get the place information given the place id 
    '''
    # use the place id to get the rating, review, location, hours of the coffee house 
    # e.g place_id = "ChIJmQwZgjKu44kRnFv0fXzW8pI"
    
    # find the reviews, opening hours of the coffee house
    # tried parsing it w/ the json selection, but there's too much in the package and takes too long 
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
    info = {"Name": name,"Phone_number": phone_num, "Weekday_Hours": weekday_text, "Rating": rating, "Website": website}
    return info 
    

def get_nearby_coffee(loc, radius = 1000 ):
    '''
    Gets the nearby coffee house information given the lattitude and longtitude.
    By default, it searches for the coffee house within 1000 meters of the user's location.
    '''
    # set up params for the google api : name, phone number, weekday_text, rating, website  
    params = {
        'radius': 1000,
        'location': loc,
        #'open_now': True,
        'keyword': 'coffee', 
        'keyword': 'latte'
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

    
    # use get place info to get the information of the coffee house
    dist_ls = {
        0 : get_place_info(gmapz_rating_loc[0]['place_id']),
        1 : get_place_info(gmapz_rating_loc[1]['place_id']),
        2 : get_place_info(gmapz_rating_loc[2]['place_id']),
        3 : get_place_info(gmapz_rating_loc[3]['place_id']),
        4 : get_place_info(gmapz_rating_loc[4]['place_id'])
    }
    rating_ls = {
        0 : get_place_info(gmapz_rating[0]['place_id']),
        1 : get_place_info(gmapz_rating[1]['place_id']),
        2 : get_place_info(gmapz_rating[2]['place_id']),
        3 : get_place_info(gmapz_rating[3]['place_id']),
        4 : get_place_info(gmapz_rating[4]['place_id'])
    } 
    
    # return the top 5 highest rating, the top 5 closest coffee house in the json format

    return rating_ls, dist_ls


def get_closest_names(rating_ls, dist_ls):
    ''' 
    Use get_nearby_coffee to get the top 5 closest coffee house names and top 5 highest rating coffee house names
    '''
    # get the top 5 closest coffee house names and top 5 highest rating coffee house names
    # get the names of the coffee house
    rating_names = [rating_ls[0]['Name'], rating_ls[1]['Name'], rating_ls[2]['Name'], rating_ls[3]['Name'], rating_ls[4]['Name']]
    dist_names =  [dist_ls[0]['Name'], dist_ls[1]['Name'], dist_ls[2]['Name'], dist_ls[3]['Name'], dist_ls[4]['Name']]
    # rating name first, then distance name, in a single list
    return rating_names + dist_names
 
    
def get_pic(place_name): 
    ''' 
    Use the place name and return a photo of the place
    '''
    url = 'https://api.pexels.com/v1/search?query=' + place_name + '&per_page=1'
    header = {'Authorization': PEXELS_KEY}
    response = requests.request("GET", url, headers = header)
    response = response.json()
    photo_ls = [] 
    for photo in response['photos']:
        photo_ls.append(photo['src']['medium'])

    return photo_ls 


def get_pic_all(names):
    '''
    Use the place info and return a photo of the place BY the top rating coffee houses AND the top closest coffee houses
    '''
    # call the get_pic function to get the photo of the place with delay to the calls to the api
    pic_ls = [] 
    for name in names:
        time.sleep(1)
        pic = get_pic(name)
        if pic != []:
            pic_ls.append(pic)
    return pic_ls
              
            






