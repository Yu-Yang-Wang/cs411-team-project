from flask import Flask, request
import scraper, json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello_world():
   return "<p>Hello, World!</p>"

# takes form input and returns price results
@app.route('/search', methods=['GET', 'POST'])
@cross_origin()
def getProduct():
   data = json.loads(request.data)
   print("request received json: "+str(data))
   product = data['product']
   user = data['user']
   print("product name="+product+"|user="+user)
   return scraper.getData(product)


print(hello_world)