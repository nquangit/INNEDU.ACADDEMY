from . import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    email = db.Column(db.String(64), unique=True, index=True)
    password_hash = db.Column(db.String(128))
    confirmed = db.Column(db.Boolean, default=False)
    locked = db.Column(db.Boolean, default=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    businessPartnerId = db.Column(db.Integer, db.ForeignKey('business_partner.id'))
    refCode = db.Column(db.String(64), index=True)
    inviteCode = db.Column(db.String(64), unique=True, index=True)
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)

class UserDetail:
    __tablename__ = 'user_details'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    avatar = db.Column(db.String(128))
    gender = db.Column(db.String(64))
    birthday = db.Column(db.DateTime)
    phone = db.Column(db.String(64))
    address = db.Column(db.String(128))
    position = db.Column(db.String(64))
