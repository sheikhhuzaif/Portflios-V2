import datetime

DJANGO_FORMAT = "%Y-%m-%d"

def create_date(date, format):
    try:
        return datetime.datetime.strptime(date, format).date()
    except:
        return None