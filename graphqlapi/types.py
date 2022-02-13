import graphene
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType

from userprofile.models import BasicInfo, AddressInfo, Skill, Education, Work, Social


class UserType(DjangoObjectType):
    class Meta:
        model = User


class BasicInfoType(DjangoObjectType):
    class Meta:
        model = BasicInfo


class AddressType(DjangoObjectType):
    class Meta:
        model = AddressInfo


class SkillType(DjangoObjectType):
    class Meta:
        model = Skill


class EducationType(DjangoObjectType):
    start_date = graphene.String()
    end_date = graphene.String()

    def resolve_start_date(self, info):
        return str(self.start_date)

    def resolve_end_date(self, info):
        return str(self.end_date)

    class Meta:
        model = Education


class WorkType(DjangoObjectType):
    class Meta:
        model = Work


class SocialType(DjangoObjectType):
    class Meta:
        model = Social
