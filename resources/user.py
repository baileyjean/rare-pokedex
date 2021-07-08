from flask_restful import Resource
from flask import request
from models.user import User
from models.db import db

class Users(Resource):
    def get(self):
        data = User.find_all()
        print(data)
        results = [u.json() for u in data]
        return results
    
    def post(self):
        data = request.get_json()
        user = User(**data)
        user.create()
        return user.json(), 201

class SingleUser(Resource):
    def get(self, user_id):
        user = User.query.options(
            joinedload('cards')).filter_by(id=user_id).first()
        user = User.find_by_id(user_id)
        if not user:
            return {"message": "Not Found"}, 404
        cards = [c.json() for c in data]
        return {**user.json(), "cards": cards}

    def delete(self, id):
        user = User.find_by_id(id)
        if not user:
            return {"message": "Not Found"}, 404

        db.session.delete(user)
        db.session.commit()
        return {"payload": id}