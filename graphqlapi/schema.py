import graphene
from .mutations import UpdateBasicInfo, UpdateAddress, UpdateEducation, UpdateWork, UpdateSkill, UpdateSocial, \
    DeleteEducation, DeleteWork, DeleteSkill, DeleteSocial, SetTemplate, SendMail
from .types import UserType, BasicInfoType, AddressType, SkillType, EducationType, WorkType, SocialType, BaseDataType, \
    PortfolioType, ResumeType, BlogType
from userprofile.models import AddressInfo

from portfolio.models import Portfolio
from resumes.models import Resumes
from blogs.models import Blog
from django.contrib.auth.models import User


class Query(graphene.ObjectType):
    base_data = graphene.Field(BaseDataType)
    user_data = graphene.Field(UserType)
    basic_info = graphene.Field(BasicInfoType)
    address = graphene.Field(AddressType)
    skills = graphene.List(SkillType)
    educations = graphene.List(EducationType)
    works = graphene.List(WorkType)
    socials = graphene.List(SocialType)
    portfolios = graphene.List(PortfolioType)
    resumes = graphene.List(ResumeType)
    profile_completion = graphene.Int()
    blogs = graphene.List(BlogType)
    template_data = graphene.Field(UserType, username=graphene.String())

    def resolve_template_data(self, info, username):
        user = User.objects.filter(username=username).first()
        if user:
            return user

    def resolve_blogs(self, info):
        return Blog.objects.all()

    def resolve_profile_completion(self, info):
        user = info.context.user
        if user.is_authenticated:
            total = 0
            if user.basicinfo:
                total += 25
            if user.address:
                total += 15
            if skill_count := user.skills.all().count():
                skill_val = 3 * skill_count
                if skill_count < 15:
                    total += skill_val
                else:
                    total += 15
            if education_count := user.education.all().count():
                edu_val = 5 * education_count
                if edu_val < 15:
                    total += edu_val
                else:
                    total += 15
            if work_count := user.works.all().count():
                work_val = 5 * work_count
                if work_val < 15:
                    total += work_val
                else:
                    total += 15
            if socials_count := user.socials.all().count():
                socials_val = 4 * socials_count
                if socials_val < 15:
                    total += socials_val
                else:
                    total += 15
            if total<100:
                return total
            else:
                return 100

    def resolve_resumes(self, info):
        return Resumes.objects.all()

    def resolve_portfolios(self, info):
        return Portfolio.objects.all()

    def resolve_base_data(self, info):
        return "ABC"

    def resolve_socials(self, info):
        user = info.context.user
        if user.is_authenticated:
            return user.socials.all()

    def resolve_works(self, info):
        user = info.context.user
        if user.is_authenticated:
            return user.works.all()

    def resolve_educations(self, info):
        user = info.context.user
        if user.is_authenticated:
            return user.education.all()

    def resolve_skills(self, info):
        user = info.context.user
        if user.is_authenticated:
            return user.skills.all()

    def resolve_address(self, info):
        user = info.context.user
        if user.is_authenticated:
            return AddressInfo.objects.filter(user=user).first()

    def resolve_basic_info(self, info):
        user = info.context.user
        if user.is_authenticated:
            return user.basicinfo

    def resolve_user_data(self, info):
        return info.context.user


class Mutation(graphene.ObjectType):
    update_basic_info = UpdateBasicInfo.Field()
    update_address = UpdateAddress.Field()
    update_education = UpdateEducation.Field()
    delete_education = DeleteEducation.Field()
    update_work = UpdateWork.Field()
    delete_work = DeleteWork.Field()
    update_skill = UpdateSkill.Field()
    delete_skill = DeleteSkill.Field()
    update_social = UpdateSocial.Field()
    delete_social = DeleteSocial.Field()
    set_template = SetTemplate.Field()
    send_mail = SendMail.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
