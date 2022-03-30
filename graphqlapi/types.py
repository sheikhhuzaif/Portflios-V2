import graphene
from django.contrib.auth.models import User
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType
import datetime
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


class BasicInfoType(DjangoObjectType):
    gender = graphene.String()
    age = graphene.String()
    email = graphene.String()

    def resolve_email(self, info):
        return self.user.username

    def resolve_age(self, info):
        cuur_year = datetime.date.today().year
        dob_year = self.dob.year
        age = cuur_year-dob_year
        return str(age)

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
    start_date = graphene.String()
    end_date = graphene.String()

    def resolve_start_date(self, info):
        return self.start_date.strftime("%m-%Y")

    def resolve_end_date(self, info):
        return self.end_date.strftime("%m-%Y")

    class Meta:
        model = Work


class SocialType(DjangoObjectType):
    link = graphene.String(source="link")

    
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

class UserType(DjangoObjectType):
    basic_info = graphene.Field(BasicInfoType)
    socials = graphene.List(SocialType)
    works = graphene.List(WorkType)
    educations = graphene.List(EducationType)
    skills = graphene.List(SkillType)
    address = graphene.Field(AddressType)
    template_name = graphene.String()

    def resolve_template_name(self, info):
        return self.basicinfo.portfolio.template_name

    def resolve_skills(self, info):
        return self.skills.all()

    def resolve_address(self, info):
        return AddressInfo.objects.filter(user=self).first()

    def resolve_works(self, info):
        return self.works.all()

    def resolve_educations(self, info):
        return self.education.all()

    def resolve_socials(self, info):
        return self.socials.all()

    def resolve_basic_info(self, info):
        return self.basic_info

    class Meta:
        model = User
