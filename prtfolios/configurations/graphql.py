GRAPHENE = {
    "SCHEMA": "graphqlapi.schema"
}

CORS_ORIGIN_WHITELIST = [
     'http://localhost:3000',
     'http://143.244.134.97/',
     'https://www.portfolios.works/'
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
    ),
}
