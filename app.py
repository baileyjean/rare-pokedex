from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_migrate import Migrate
from models import user, card

from resources import user, card
from models.db import db

app = Flask(__name__)
CORS(app)
api = Api(app)

# Init db and migrate here
# THERE ARE A DOZEN WAYS TO DO THIS CONFIG - THIS IS JUST ONE WAY TO DO IT
# sets env using Flask and forwards to SQLAlchemy for us
# creates a giant dictionary and puts all the info we need in there
# cache gets so big and slows down our machines/servers - so this stops it from doing that
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# generates a URL for us... this is saying "hey talk to postgres, then create this local server"
# this line changes when we deploy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/rare_pokedex'
# this config gives us a print-out of the query we ran in the terminal
# turn this off for production!!!!
app.config['SQLALCHEMY_ECHO'] = True

# passing in our whole Flask app
db.init_app(app)
# How the Migrate arg looks, in general:
# Migrate(flask_app, db_instance)
migrate = Migrate(app,db)

# Leave resources
api.add_resource(user.Users, '/users')
api.add_resource(user.UserDetails, '/users/<int:id>')
api.add_resource(card.Cards, '/cards')
api.add_resource(card.CardDetails, '/cards/<int:id>')
api.add_resource(card.CardQuality, '/cards/<int:quality>')
api.add_resource(card.CardPrice, '/cards/<int:price>')

# nodemon-like features enabled below - refreshes server for us
# we can also set our ports here by passing in the "port:<port-num>"" arg
# when we deploy flask servers, this tells the deployment server where to look
if __name__ == '__main__':
    app.run(debug=True)