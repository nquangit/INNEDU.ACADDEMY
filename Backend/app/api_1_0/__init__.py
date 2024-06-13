from flask import Blueprint, jsonify
from .. import jwt
from ..models import User

api = Blueprint('api', __name__)


# Register a callback function that loads a user from your database whenever
# a protected route is accessed. This should return any python object on a
# successful lookup, or None if the lookup failed for any reason (for example
# if the user has been deleted from the database).


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()

@jwt.user_identity_loader
def user_identity_lookup(user_id):
    return user_id


@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    return jsonify(response_dict('error', 'Token has expired', {})), 401


@jwt.invalid_token_loader
def invalid_token_callback(error):
    return jsonify(response_dict('error', 'Invalid token', {})), 401


def response_dict(status, message, data):
    return {
        'status': status,
        'message': message,
        'data': data
    }

from . import authentication