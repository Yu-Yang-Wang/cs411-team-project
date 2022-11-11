from flask_cors import CORS, cross_origin
from flask_restx import Api
from flask import Flask, jsonify
from apis import api

app = Flask(__name__)
CORS(app)
api.init_app(app)

app.run(debug=True)