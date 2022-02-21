import graphene
from .mutations import UpdateBasicInfo, UpdateAddress, UpdateEducation, UpdateWork, UpdateSkill, UpdateSocial, \
    DeleteEducation, DeleteWork, DeleteSkill, DeleteSocial
from .types import UserType, BasicInfoType, AddressType, SkillType, EducationType, WorkType, SocialType, BaseDataType
from userprofile.models import AddressInfo


class Query(graphene.ObjectType):
    base_data = graphene.Field(BaseDataType)
    user_data = graphene.Field(UserType)
    basic_info = graphene.Field(BasicInfoType)
    address = graphene.Field(AddressType)
    skills = graphene.List(SkillType)
    educations = graphene.List(EducationType)
    works = graphene.List(WorkType)
    socials = graphene.List(SocialType)

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


schema = graphene.Schema(query=Query, mutation=Mutation)
