from flask_cors import CORS, cross_origin
from flask_restx import Api
from flask import Flask, jsonify
from api import apis as api 

app = Flask(__name__)
CORS(app)
api.init_app(app)



if __name__ == "__main__":
    app.run(debug=True)