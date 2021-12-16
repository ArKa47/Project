"""""
#initial something to database but my database aready have something
from . import db

class Movie(db.Model):# db.Model is inherit from flask sever is use to create a database and initial them
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    ratting = db.Column(db.Integer)
"""
