from django.db import models

# Create your models here.
from versatileimagefield.fields import VersatileImageField

from base.models import BaseModel


class Portfolio(BaseModel):
    template_name = models.CharField(max_length=32)
    demo_image = VersatileImageField(upload_to='portfolio-demos')
    paid = models.BooleanField(default=False)
