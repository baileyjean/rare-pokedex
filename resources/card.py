from flask_restful import Resource
from flask import request
from models.card import Card
from models.db import db


class Cards(Resource):
    def get(self):
        data = Card.find_all()
        results = [s.json() for s in data]
        return results

    def post(self):
        data = request.get_json()
        card = Card(**data)
        card.create()
        return card.json(), 201


class SingleCard(Resource):
    def get(self, id):
        card = Card.find_by_id(id)
        if not card:
            return {"message": "Not Found"}, 404
        return card.json()

    def delete(self, id):
        card = Card.find_by_id(id)
        if not card:
            return {"message": "Not Found"}, 404

        db.session.delete(card)
        db.session.commit()
        return {"payload": id}

    def put(self, id):
        card = Card.find_by_id(id)
        if not card:
            return {"message": "Not Found"}, 404
        data = request.get_json()
        for key in data:
            setattr(card, key, data[key])

        db.session.commit()
        return card.json()