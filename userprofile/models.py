from datetime import datetime

from django.contrib.auth.models import User
from django.db import models
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField
from versatileimagefield.fields import VersatileImageField

from prtfolios.base.models import BaseModel
from .utils import Gender, Socials


class BasicInfo(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    about = models.TextField(blank=True, null=True)
    phone = PhoneNumberField(blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=True, choices=Gender.choices)
    picture = VersatileImageField(blank=True, null=True, upload_to='profile-pictures')
    profession = models.CharField(max_length=40)
    dob = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username

    @property
    def age(self):
        return datetime.date.today().year - self.dob.year - (
                (datetime.date.today().month, datetime.date.today().day) < (self.dob.month, self.dob.day))


class AddressInfo(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="address")
    country = CountryField(blank=True, null=True)
    state = models.CharField(blank=True, null=True, max_length=128)
    city = models.CharField(blank=True, null=True, max_length=128)
    address = models.TextField(blank=True, null=True)
    pincode = models.CharField(blank=True, null=True, max_length=16)

    def __str__(self):
        return self.country + self.pincode


class Skill(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="skills")

    def __str__(self):
        return self.name


class Education(models.Model):
    course_name = models.CharField(max_length=128)
    university = models.CharField(max_length=128)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    gpa = models.FloatField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="education")

    def __str__(self):
        return self.course_name + self.university


class Work(models.Model):
    title = models.CharField(max_length=128)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    company = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="works")

    def __str__(self):
        return self.title + self.company

    @property
    def get_duration(self):
        if self.end_date:
            return '{} to {}'.format(datetime.strftime(self.start_date, "%M-%Y"), datetime.strftime(self.end_date,
                                                                                                    "%M-%Y"))
        else:
            return '{} to Present'.format(datetime.strftime(self.start_date, "%M-%Y"))


class Social(models.Model):
    platform = models.CharField(max_length=20, choices=Socials.choices)
    user_name = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @property
    def link(self):
        return str(self.platform).lower() + ".com/" + str(self.user_name)

    def __str__(self):
        return self.platform + self.user_name
