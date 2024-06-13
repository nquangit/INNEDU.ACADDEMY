from flask import request, jsonify, current_app
from flask_jwt_extended import (
    create_access_token,
    jwt_required, get_jwt_identity,
    current_user
)
from datetime import datetime
from . import api, response_dict
from ..models import User, UserDetail, BusinessPartner
from .. import db
from ..email import send_email


date_format = "%Y-%m-%d"


@api.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        email = data.get('email')
        name = data.get('name')
        username = data.get('username')
        password = data.get('password')
        confirm_password = data.get('confirmPassword')
        address = data.get('address')
        birthday = datetime.strptime(data.get('birthday'), date_format)
        gender = data.get('gender').get('name')
    except Exception:
        return jsonify(response_dict('error', 'Invalid data', {})), 400

    invite_code = data.get('inviteCode')

    # Check if the user already exists
    if User.query.filter_by(email=email).first():
        return jsonify(response_dict('error', 'Email already exists', {})), 400
    if User.query.filter_by(username=username).first():
        return jsonify(response_dict('error', 'Username already exists', {})), 400

    # Check if the passwords match
    if password != confirm_password:
        return jsonify(response_dict('error', 'Passwords do not match', {})), 400
    # Check if the invitation code is valid
    if invite_code is not None:
        if User.query.filter_by(invite_code=invite_code).first() is None:
            return jsonify(response_dict('error', 'Invalid invitation code', {})), 400
    # Create the user
    first_name = name.split(' ')[-1]
    last_name = ' '.join(name.split(' ')[:-1])
    user_detail = UserDetail(first_name=first_name, last_name=last_name,
                             address=address, birthday=birthday, gender=gender)
    user = User(username=username, email=email,
                password=password, ref_code=invite_code)
    db.session.add(user)
    db.session.add(user_detail)
    db.session.commit()
    # Send the confirmation email
    token = user.generate_confirmation_token()
    send_email(user.email, 'Confirm Your Account',
               'confirm', user=user, url=f"{current_app.config['FRONT_END_URL']}/confirm/{token}")
    return jsonify(response_dict('success', 'User created successfully', {})), 201


@api.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
    except Exception:
        return jsonify(response_dict('error', 'Invalid data', {})), 400

    user = User.query.filter_by(username=username).first()
    if user is None or not user.verify_password(password):
        return jsonify({'message': 'Invalid credentials'}), 401
    access_token, refresh_token = user.generate_auth_tokens()
    return jsonify(response_dict('success', 'Logged in successfully', {'access_token': access_token, 'refresh_token': refresh_token, 'confirmed': user.confirmed})), 200


@api.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    user_id = get_jwt_identity()
    new_access_token = create_access_token(identity=user_id)
    return jsonify(response_dict('success', 'Token refreshed successfully', {'access_token': new_access_token})), 200


@api.route('/me', methods=['GET'])
@jwt_required()
def protected():
    user = User.query.get(current_user.id)
    return jsonify(response_dict('success', 'Protected route', {'user': user.to_dict()})), 200


@api.route("/confirm/<token>", methods=['GET'])
@jwt_required()
def confirm(token):
    user = User.query.get(current_user.id)
    if user is None:
        return jsonify(response_dict('error', 'User not found', {})), 404
    if user.confirm(token):
        return jsonify(response_dict('success', 'Email confirmed', {})), 200
    else:
        return jsonify(response_dict('error', 'Invalid token', {})), 400


@api.route('/forgot_password', methods=['POST'])
def forgot_password():
    try:
        data = request.get_json()
        email = data.get('email')
    except Exception:
        return jsonify(response_dict('error', 'Invalid data', {})), 400

    user = User.query.filter_by(email=email).first()

    response = jsonify(response_dict('success', 'Email sent', {})), 200
    if user is not None:
        reset_token = user.generate_reset_password_token()
        send_email(user.email, 'Reset Your Password',
                   'reset_password', user=user, url=f"{current_app.config['FRONT_END_URL']}/reset_password/{reset_token}")

    return response


@api.route('/reset_password/<token>', methods=['POST'])
def reset_password(token):
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirmPassword')
    except Exception:
        return jsonify(response_dict('error', 'Invalid data', {})), 400

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify(response_dict('error', 'User not found', {})), 404
    if password != confirm_password:
        return jsonify(response_dict('error', 'Passwords do not match', {})), 400

    user.reset_password(token=token, new_password=password)
    db.session.commit()
    return jsonify(response_dict('success', 'Password reset successfully', {})), 200
