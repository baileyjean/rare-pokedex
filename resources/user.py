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

class UserDetails(Resource):
    def get(self,id):
        user = User.find_with_cards(id)
        return user

    def delete(self, id):
        user = User.find_by_id(id)
        if not user:
            return {"message": "User Not Found"}, 404
        db.session.delete(user)
        db.session.commit()
        return {"message": "User Deleted", "payload": id}