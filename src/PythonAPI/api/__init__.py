from flask import Flask 
from flask_pymongo import PyMongo


def create_app():
    app = Flask(__name__)

    app.config['MONGO_URI'] = "mongodb://localhost:27017/mydb"
    mongo = PyMongo(app) #biding like "db = g._database = PyMongo(current_app).db" in views.py but I don't wanna write api here so I declare this just for reminder

   
    
    from .views import main #import main which is take controll of all api from views.py file
    app.register_blueprint(main) #register what use in main(views.py) to app too
    
    return app