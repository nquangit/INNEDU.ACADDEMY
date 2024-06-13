from . import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from flask_jwt_extended import create_access_token, create_refresh_token
from itsdangerous.url_safe import URLSafeTimedSerializer as Serializer
from flask import current_app
import uuid


class Permission:
    # Basic permissions
    COMMENT = 0x01
    # Instructor permissions
    CREATE_COURSES = 0x02
    EDIT_COURSES = 0x04
    # Manager permissions
    MANAGE_COURSE = 0x08
    MANAGE_USERS = 0x10
    MANAGE_PAYMENTS = 0x20
    # Admin permissions
    ADMINISTER = 0x40


class BusinessPartner(db.Model):
    __tablename__ = 'business_partners'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True, index=True)
    address = db.Column(db.String(128))
    phone = db.Column(db.String(64))
    email = db.Column(db.String(64))
    users = db.relationship('User', backref='business_partner', lazy='dynamic')


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True, index=True)
    permissions = db.Column(db.Integer)
    default = db.Column(db.Boolean, default=False)
    users = db.relationship('User', backref='roles', lazy='dynamic')

    @staticmethod
    def insert_roles():
        roles = {
            'Learner': (Permission.COMMENT, True),
            'Creator': (Permission.COMMENT |
                        Permission.CREATE_COURSES |
                        Permission.EDIT_COURSES, False),
            'Manager': (Permission.COMMENT |
                        Permission.CREATE_COURSES |
                        Permission.EDIT_COURSES |
                        Permission.MANAGE_COURSE |
                        Permission.MANAGE_USERS |
                        Permission.MANAGE_PAYMENTS, False),
            'Admin': (0xfff, False)
        }
        for r in roles:
            role = Role.query.filter_by(name=r).first()
            if role is None:
                role = Role(name=r)
            role.permissions = roles[r][0]
            role.default = roles[r][1]
            db.session.add(role)
        db.session.commit()

    def __repr__(self):
        return '<Role %r>' % self.name

class RefreshToken(db.Model):
    __tablename__ = 'refresh_tokens'
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(64), unique=True, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, index=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.created_at = datetime.now()

    def to_dict(self):
        return {
            'id': self.id,
            'jti': self.jti,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def __repr__(self):
        return f'<RefreshToken {self.jti}>'

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    email = db.Column(db.String(64), unique=True, index=True)
    password_hash = db.Column(db.String(256))
    confirmed = db.Column(db.Boolean, default=False)
    locked = db.Column(db.Boolean, default=False)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    business_partner_id = db.Column(
        db.Integer, db.ForeignKey('business_partners.id'), nullable=True, default=None)
    user_detail = db.relationship('UserDetail', backref='users', uselist=False)
    ref_code = db.Column(db.String(64), index=True)
    invite_code = db.Column(db.String(64), unique=True, index=True)
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        if self.role_id is None:
            if self.email == current_app.config['ADMIN_EMAIL']:
                self.role_id = Role.query.filter_by(
                    permissions=0xfff).first().id
            else:
                self.role_id = Role.query.filter_by(default=True).first().id
        # Init created_at and updated_at
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        # # Init user detail
        # if self.user_detail is None:
        #     self.user_detail = UserDetail()
        # Generate invite code
        self.invite_code = self.generate_invite_code()

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def generate_auth_tokens(self):
        access_token = create_access_token(
            identity=self.id, expires_delta=timedelta(minutes=15))
        refresh_token = create_refresh_token(identity=self.id)
        return access_token, refresh_token

    def generate_confirmation_token(self):
        s = Serializer(current_app.config['SECRET_KEY'])
        return s.dumps({'confirm': self.id}, salt=current_app.config['SECURITY_PASSWORD_SALT'])

    def confirm(self, token, expiration=3600):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(
                token,
                salt=current_app.config['SECURITY_PASSWORD_SALT'],
                max_age=expiration
            )
        except Exception:
            return False
        print(data)
        if data.get('confirm') != self.id:
            return False
        self.confirmed = True
        db.session.add(self)
        return True

    def generate_reset_password_token(self):
        s = Serializer(current_app.config['SECRET_KEY'])
        return s.dumps({'reset': self.username}, salt=current_app.config['SECURITY_PASSWORD_SALT'])

    def change_password(self, old_password, new_password):
        if self.verify_password(old_password):
            self.password = new_password
            db.session.add(self)
            return True
        return False

    def reset_password(self, token, new_password, expiration=3600):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(
                token, salt=current_app.config['SECURITY_PASSWORD_SALT'], max_age=expiration)
        except Exception:
            return False
        if data.get('reset') != self.username:
            return False
        self.password = new_password
        db.session.add(self)
        return True

    def generate_invite_code(self):
        return str(uuid.uuid4())

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'confirmed': self.confirmed,
            'role': self.role_id,
            'business_partner': self.business_partner.name if self.business_partner is not None else None,
            'ref_code': self.ref_code,
            'invite_code': self.invite_code,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def send_reset_password_email(self):
        token = self.generate_reset_password_token()
        subject = 'Reset your password'
        # send_email(self.email, subject, 'auth/reset_password', user=self, token=token)

    def __repr__(self):
        return '<User %r>' % self.username


class UserDetail(db.Model):
    __tablename__ = 'user_details'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), unique=True)
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    avatar = db.Column(db.String(128))
    gender = db.Column(db.String(64))
    birthday = db.Column(db.DateTime)
    phone = db.Column(db.String(64))
    address = db.Column(db.String(128))
    position = db.Column(db.String(64))


class ActionHistory(db.Model):
    __tablename__ = 'action_histories'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    action = db.Column(db.String(64))
    timestamp = db.Column(db.DateTime, index=True)


# Association table for self-referential many-to-many relationship
category_association = db.Table('category_association',
                                db.Column('parent_id', db.Integer, db.ForeignKey(
                                    'categories.id'), primary_key=True),
                                db.Column('child_id', db.Integer, db.ForeignKey(
                                    'categories.id'), primary_key=True)
                                )


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    description = db.Column(db.String(128))
    parents = db.relationship('Category', secondary=category_association,
                              primaryjoin=id == category_association.c.child_id,
                              secondaryjoin=id == category_association.c.parent_id,
                              backref=db.backref('children', lazy='dynamic'))
    is_root = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Category {self.name}>'


course_category = db.Table('course_category',
                           db.Column('course_id', db.Integer, db.ForeignKey(
                               'courses.id'), primary_key=True),
                           db.Column('category_id', db.Integer, db.ForeignKey(
                               'categories.id'), primary_key=True)
                           )


class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    description = db.Column(db.String(128))
    price = db.Column(db.Float)
    image = db.Column(db.String(128))
    discount = db.Column(db.Float)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    categories = db.relationship('Category', secondary=course_category, lazy='subquery',
                                 backref=db.backref('courses', lazy=True))
    # How long the course will be available after being purchased (in days)
    duration = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class Transaction(db.Model):
    __tablename__ = 'transactions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    status = db.Column(db.String(64))
    amount = db.Column(db.Float)
    secure_code = db.Column(db.String(64))
    payment_method_id = db.Column(
        db.Integer, db.ForeignKey('payment_methods.id'))
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class TransactionDetail(db.Model):
    __tablename__ = 'transaction_details'
    id = db.Column(db.Integer, primary_key=True)
    transaction_id = db.Column(db.Integer, db.ForeignKey('transactions.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    price = db.Column(db.Float)
    discount = db.Column(db.Float)
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class PaymentMethod(db.Model):
    __tablename__ = 'payment_methods'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    description = db.Column(db.String(128))
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    content = db.Column(db.String(128))
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class Invitation(db.Model):
    __tablename__ = 'invitations'
    id = db.Column(db.Integer, primary_key=True)
    inviter_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    invitee_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, index=True)
    updated_at = db.Column(db.DateTime, index=True)


class Enrollment(db.Model):
    __tablename__ = 'enrollments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    joined_at = db.Column(db.DateTime, index=True)
    end_at = db.Column(db.DateTime, index=True)
