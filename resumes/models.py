from django.db import models
from versatileimagefield.fields import VersatileImageField

from base.models import BaseModel


class Resumes(BaseModel):
    template_name = models.CharField(max_length=32)
    demo_image = VersatileImageField(upload_to='resume-demos')
    paid = models.BooleanField(default=0)
