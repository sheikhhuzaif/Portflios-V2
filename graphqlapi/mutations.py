import graphene
from graphene.types.generic import GenericScalar

from userprofile.models import BasicInfo, AddressInfo, Skill, Education, Work, Social

from .types import BasicInfoType, AddressType, SkillType, SocialType, WorkType, EducationType
from .utils import create_date, DJANGO_FORMAT


class UpdateBasicInfo(graphene.Mutation):
    basic_info = graphene.Field(BasicInfoType)
    success = graphene.Boolean()

    class Arguments:
        about = graphene.String()
        phone = graphene.String()
        gender = graphene.String()
        picture = GenericScalar()
        profession = graphene.String()
        dob = graphene.String()

    def mutate(self, info, about=None, phone=None, gender=None, picture=None, profession=None, dob=None):
        user = info.context.user
        basic_info = BasicInfo.objects.filter(user=user).first()
        if basic_info:
            basic_info = BasicInfo.objects.update_info(basic_info.id, about=about, phone=phone, gender=gender, picture=picture,
                                          profession=profession, dob=dob)
            return UpdateBasicInfo(basic_info, True)
        else:
            basic_info = BasicInfo.objects.create_info(user, about=about, phone=phone, gender=gender, picture=picture,
                                                       profession=profession, dob=dob)
            if basic_info:
                return UpdateBasicInfo(basic_info, True)
        return UpdateBasicInfo(None, False)


class UpdateAddress(graphene.Mutation):
    address = graphene.Field(AddressType)
    success = graphene.Boolean()

    class Arguments:
        country = graphene.String()
        state = graphene.String()
        city = graphene.String()
        address = graphene.String()
        pincode = graphene.String()

    def mutate(self, info, country=None, state=None, city=None, address=None, pincode=None):
        user = info.context.user
        addrss = AddressInfo.objects.filter(user=user).first()
        if addrss:
            AddressInfo.objects.update_address(addrss.id, country=country, pincode=pincode, state=state, city=city,
                                               address=address)
            return UpdateAddress(addrss, True)
        else:
            addrss = AddressInfo.objects.create_address(user, country=country, pincode=pincode, state=state, city=city,
                                                        address=address)
            if addrss:
                return UpdateAddress(addrss, True)

        return UpdateAddress(None, False)


class UpdateSkill(graphene.Mutation):
    skill = graphene.Field(SkillType)
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()
        name = graphene.String()

    def mutate(self, info, name, pk=None):
        user = info.context.user
        if pk:
            skill = Skill.objects.filter(id=pk).first()
            if skill and skill.user == user:
                skill = Skill.objects.update_skill(pk, name=name)
                return UpdateSkill(skill, True)
        else:
            skill = Skill.objects.create_skill(user, name)
            if skill:
                return UpdateSkill(skill, True)

        return UpdateSkill(None, False)


class DeleteSkill(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()

    def mutate(self, info, pk):
        user = info.context.user
        skill = Skill.objects.filter(id=pk).first()
        if skill and skill.user == user:
            skill.delete()
            return DeleteSkill(True)
        return DeleteSkill(False)


class UpdateEducation(graphene.Mutation):
    education = graphene.Field(EducationType)
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()
        course_name = graphene.String()
        university = graphene.String()
        start_date = graphene.String()
        end_date = graphene.String()
        gpa = graphene.Float()

    def mutate(self, info, course_name, university, start_date, end_date=None, gpa=None, pk=None):
        user = info.context.user
        if pk:
            education = Education.objects.filter(id=pk).first()
            if education and education.user == user:
                Education.objects.update_skill(pk, course_name=course_name, university=university,
                                               start_date=create_date(start_date, DJANGO_FORMAT),
                                               end_date=create_date(end_date, DJANGO_FORMAT), gpa=gpa)
                return UpdateEducation(education, True)
        else:
            education = Education.objects.create_education(user, course_name=course_name, university=university,
                                                           start_date=start_date, end_date=end_date, gpa=gpa)
            if education:
                return UpdateEducation(education, True)

        return UpdateEducation(None, False)


class DeleteEducation(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()

    def mutate(self, info, pk):
        user = info.context.user
        education = Education.objects.filter(id=pk).first()
        if education and education.user == user:
            education.delete()
            return DeleteSkill(True)
        return DeleteSkill(False)


class UpdateWork(graphene.Mutation):
    work = graphene.Field(WorkType)
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()
        title = graphene.String()
        company = graphene.String()
        start_date = graphene.String()
        end_date = graphene.String()

    def mutate(self, info, title, company, start_date, end_date=None, pk=None):
        user = info.context.user
        if pk:
            work = Work.objects.filter(id=pk).first()
            if work and work.user == user:
                Work.objects.update_work(pk, title=title, company=company, start_date=start_date, end_date=end_date)
                return UpdateWork(work, True)
        else:
            work = Work.objects.create_work(user, title=title, company=company, start_date=start_date,
                                            end_date=end_date)
            if work:
                return UpdateWork(work, True)

        return UpdateWork(None, False)


class DeleteWork(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()

    def mutate(self, info, pk):
        user = info.context.user
        work = Work.objects.filter(id=pk).first()
        if work and work.user == user:
            work.delete()
            return DeleteSkill(True)
        return DeleteSkill(False)


class UpdateSocial(graphene.Mutation):
    social = graphene.Field(SocialType)
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()
        platform = graphene.String()
        username = graphene.String()

    def mutate(self, info, platform, username, pk=None):
        user = info.context.user
        if pk:
            social = Social.objects.filter(id=pk).first()
            if social and social.user == user:
                Social.objects.update_social(pk, platform=platform, user_name=username)
                return UpdateSocial(social, True)
        else:
            social = Social.objects.create_social(user, platform=platform, user_name=username)
            if social:
                return UpdateSocial(social, True)

        return UpdateSocial(None, False)


class DeleteSocial(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        pk = graphene.UUID()

    def mutate(self, info, pk):
        user = info.context.user
        social = Social.objects.filter(id=pk).first()
        if social and social.user == user:
            social.delete()
            return DeleteSkill(True)
        return DeleteSkill(False)
