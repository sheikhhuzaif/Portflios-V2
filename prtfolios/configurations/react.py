import os

from prtfolios.settings import BASE_DIR

REACT_ROOT = os.path.join(BASE_DIR, 'frontend')
REACT_BUILD = os.path.join(REACT_ROOT, 'build')
REACT_STATIC = os.path.join(REACT_ROOT, 'build', 'static')
CREATE_REACT_APP = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': REACT_BUILD,
        'FRONT_END_SERVER': "http://localhost:3000/",
        'is_dev': True,
    }
}

STATICFILES_DIRS = [
    REACT_STATIC,
]
