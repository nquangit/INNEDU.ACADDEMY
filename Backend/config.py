import datetime
import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    INNEDU_ADMIN = os.environ.get('INNEDU_ADMIN') or 'huynhngocq5@gmail.com'
    FRONT_END_URL = os.environ.get('FRONT_END_URL') or 'http://localhost:3000'
    SECRET_KEY = os.environ.get(
        'SECRET_KEY') or 'NWYzZTEzNjNmOTRkNDA2MTY5NDhkZmQ3ZjQ3OGUyYjRiODk2MmExYmVhZGM4YzhlMDc0ZmU3ZWRkNzA4OTI2MiAgLQo'
    JWT_SECRET_KEY = os.environ.get(
        'JWT_SECRET_KEY') or 'NWYzZTEzNjNmOTRkNDA2MTY5NDhkZmQ3ZjQ3OGUyYjRiODk2MmExYmVhZGM4YzhlMDc0ZmU3ZWRkNzA4OTI2MiAgLQo'
    SSL_DISABLE = False
    ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL') or 'huynhngocq5@gmail.com'
    SECURITY_PASSWORD_SALT = os.environ.get(
        'SECURITY_PASSWORD_SALT') or 'NWYzZTEaaaazNWYzZTEzNjNmOTRkNDA2MTY5NDhkZmQ3ZjQ3OGUyYjRiODk2MmExYmVhZGM4YzhlMDc0ZmU3ZWRkNzA4OTI2MiAgLQo'
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_DEBUG = False
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER')
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_SUBJECT_PREFIX = '[INNEDU]'
    MAIL_SENDER = os.environ.get('MAIL_DEFAULT_SENDER')

    # JWT
    JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(minutes=15)
    JWT_REFRESH_TOKEN_EXPIRES = datetime.timedelta(days=30)

    @staticmethod
    def init_app(app):
        '''
        Initialize application
        '''
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-test.sqlite')
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data.sqlite')

    @classmethod
    def init_app(cls, app):
        Config.init_app(app)

        # email errors to the administrators
        import logging
        from logging.handlers import SMTPHandler
        credentials = None
        secure = None
        if getattr(cls, 'MAIL_USERNAME', None) is not None:
            credentials = (cls.MAIL_USERNAME, cls.MAIL_PASSWORD)
            if getattr(cls, 'MAIL_USE_TLS', None):
                secure = ()
        mail_handler = SMTPHandler(
            mailhost=(cls.MAIL_SERVER, cls.MAIL_PORT),
            fromaddr=cls.MAIL_SENDER,
            toaddrs=[cls.INNEDU_ADMIN],
            subject=cls.MAIL_SUBJECT_PREFIX + ' Application Error',
            credentials=credentials,
            secure=secure)
        mail_handler.setLevel(logging.ERROR)
        app.logger.addHandler(mail_handler)


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,

    'default': DevelopmentConfig
}
