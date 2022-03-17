import graphene
from django.contrib.auth.models import User
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType

from userprofile.models import BasicInfo, AddressInfo, Skill, Education, Work, Social
from portfolio.models import Portfolio
from resumes.models import Resumes
from blogs.models import Blog

from .utils import format_choices, format_choices_invert


class BaseDataType(graphene.ObjectType):
    lists = GenericScalar()
    profile = GenericScalar()

    def resolve_lists(self, info):
        final = {}
        gender_choices = BasicInfo.gender.field.choices
        socials_choices = Social.platform.field.choices
        country_choices = AddressInfo.country.field.choices
        final['genders'] = format_choices(gender_choices)
        final['social_medias'] = format_choices(socials_choices)
        final['countries'] = format_choices_invert(country_choices)
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
    gender = graphene.String()

    def resolve_gender(self, info):
        return self.gender
        
    class Meta:
        model = BasicInfo
    

class AddressType(DjangoObjectType):
    country = graphene.String()

    def resole_country(self, info):
        return self.country.name

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


class ResumeType(DjangoObjectType):
    image_path = graphene.String()

    def resolve_image_path(self, info):
        return info.context.build_absolute_uri(self.demo_image.url)

    class Meta:
        model = Resumes


class PortfolioType(DjangoObjectType):
    image_path = graphene.String()

    def resolve_image_path(self, info):
        return info.context.build_absolute_uri(self.demo_image.url)

    class Meta:
        model = Portfolio


class BlogType(DjangoObjectType):
    created_at = graphene.String()

    def resolve_created_at(self, info):
        return self.created_at.strftime('%d-%m-%Y %H:%M:%S')

    class Meta:
        model = Blog
