from flask_restful import Resource
from flask import request
from sqlalchemy.orm import joinedload
from models.card import Card
from models.db import db


class Cards(Resource):
    def get(self):
        cards = Card.find_all()
        return [card.json() for card in cards]

    def post(self):
        data = request.get_json()
        card = Card(**data)
        card.create()
        return card.json(), 201


class CardDetails(Resource):
    def get(self, id):
        card = Card.query.find_by_id(id)
        if not card:
            return {"message": "Card with that ID not found"}, 404
        return card.json(), 201

    def delete(self, id):
        card = Card.find_by_id(id)
        if not card:
            return {"message": "Card Not Found"}, 404
        db.session.delete(card)
        db.session.commit()
        return {"message": "Card Deleted", "payload": id}

class CardQuality(Resource):
    def get(self,quality):
        cards = Card.find_by_quality(quality)
        if not cards:
            return {"message": "Cards with that Quality Not Found"}, 404
        return [card.json() for card in cards], 201

class CardPrice(Resource):
    def get(self,price):
        cards = Card.find_by_price(price)
        if not cards:
            return {"message": "Cards of that Price Not Found"}, 404
        return [card.json() for card in cards], 201
        