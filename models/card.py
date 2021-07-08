from datetime import datetime
from models.db import db

class Card(db.Model):
    # defines table name
    __tablename__ = 'cards'
    
    # this is a Column going into the table we just created
    # the db variable has all the info we need to work with the database - including that "data_type = " stuff we used in sequelize
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    price = db.Column(db.Integer)
    quality = db.Column(db.Integer)
    image = db.Column(db.String(255))
    # when you make the following columns in the future, it might invoke utcnow() automatically
    # do NOT invoke it - you just want to invoke it when the stuff is actually created
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    # onupdate is a HOOK - something that's preset and just does a thing when it's told to do it
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    user = db.relationship("User", backref=db.backref('users', lazy=True))

    def __init__(self, name, price, quality, user_id, image):
        self.name = name
        self.price = price
        self.quality = quality
        self.user_id = user_id
        self.image = image

    # building a dict ahead of time so we have nice, formatted data already
    def json(self):
        return{
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "quality": self.quality,
            "user_id": self.user_id,
            "image": self.image,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    # is attached to any new instance of a Card we create
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    # this decorator allows us to access the findAll method without creating a new instance of that class
    @classmethod
    def find_all(cls):
        return Card.query.all()

    # filter_by is like the WHERE clause
    @classmethod
    def find_by_id(cls, id):
        return Card.query.filter_by(id=id).first()

    @classmethod
    def find_by_quality(cls, quality):
        return Card.query.filter_by(quality=quality).all()

    @classmethod
    def find_by_price(cls, price):
        return Card.query.filter_by(price=price).all()