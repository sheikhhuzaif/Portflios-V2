from django.db import models

# Create your models here.
from base.models import BaseModel


class Blog(BaseModel):
    author = models.CharField(max_length=128)
    title = models.CharField(max_length=256)
    content = models.TextField()

    def __str__(self):
        return self.author + " -> " + self.title
