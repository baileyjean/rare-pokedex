from datetime import datetime
from models.db import db

class User(db.Model):
    # defines table name
    __tablename__ = 'users'
    
    # this is a Column going into the table we just created
    # the db variable has all the info we need to work with the database - including that "data_type = " stuff we used in sequelize
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    image = db.Column(db.String(255))
    # when you make the following columns in the future, it might invoke utcnow() automatically
    # do NOT invoke it - you just want to invoke it when the stuff is actually created
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    # onupdate is a HOOK - something that's preset and just does a thing when it's told to do it
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())
    # one to many relationship between Users --> Cards
    cards = db.relationship(
        "Card", cascade='all', backref=db.backref('cards', lazy=True))

    def __init__(self, name, image):
        self.name = name
        self.image = image


    # building a dict ahead of time so we have nice, formatted data already
    def json(self):
        return{
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    # is attached to any new instance of a user we create
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    # this decorator allows us to access the findAll method without creating a new instance of that class
    @classmethod
    def find_all(cls):
        return User.query.all()

    # filter_by is like the WHERE clause
    @classmethod
    def find_by_id(cls, id):
        return User.query.filter_by(id=id).first()