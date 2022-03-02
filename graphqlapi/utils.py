import datetime

DJANGO_FORMAT = "%Y-%m-%d"


def create_date(date, format):
    try:
        return datetime.datetime.strptime(date, format).date()
    except:
        return None


def format_choices_invert(choices):
    final = []
    for choice in choices:
        obj = { 'label': choice[1], 'value': choice[0]}
        final.append(obj)
    return final

def format_choices(choices):
    final = []
    for choice in choices:
        obj = {'label': choice[0], 'value': choice[1]}
        final.append(obj)
    return final
