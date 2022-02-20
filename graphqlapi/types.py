import graphene
from django.contrib.auth.models import User
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType

from userprofile.models import BasicInfo, AddressInfo, Skill, Education, Work, Social

from .utils import format_choices


class BaseDataType(graphene.ObjectType):
    lists = GenericScalar()
    profile = GenericScalar()

    def resolve_lists(self, info):
        final = {}
        gender_choices = BasicInfo.gender.field.choices
        socials_choices = Social.platform.field.choices
        final['genders'] = format_choices(gender_choices)
        final['social_medias'] = format_choices(socials_choices)
        return final

    def resolve_profile(self, info):
        user = info.context.user
        final = {'username': user.username, "has_portfolio": True if user.basicinfo.portfolio else False,
                 "has_resume": True if user.basicinfo.resume else False}
        return final


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
