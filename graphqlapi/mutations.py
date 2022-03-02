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
            dob = create_date(dob[:10], '%Y-%m-%d')
            basic_info = BasicInfo.objects.update_info(basic_info.id, about=about, phone=phone, gender=gender,
                                                       picture=picture,
                                                       profession=profession, dob=dob)
            return UpdateBasicInfo(basic_info, True)
        else:
            dob = create_date(dob[:10], '%Y-%m-%d')
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
    education = graphene.List(EducationType)
    success = graphene.Boolean()

    class Arguments:
        education_data = graphene.List(GenericScalar)

    def mutate(self, info, education_data):
        user = info.context.user
        for data in education_data:
            if data.pk:
                education = Education.objects.filter(id=data.pk).first()
                if education and education.user == user:
                    Education.objects.update_skill(data.pk, course_name=data.course_name, university=data.university,
                                                   start_date=create_date(data.start_date, DJANGO_FORMAT),
                                                   end_date=create_date(data.end_date, DJANGO_FORMAT), gpa=data.gpa)
            else:
                education = Education.objects.create_education(user, course_name=data.course_name,
                                                               university=data.university,
                                                               start_date=data.start_date, end_date=data.end_date,
                                                               gpa=data.gpa)

        return UpdateEducation(user.education.all(), True)


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
                Work.objects.update_work(pk, title=title, company=company,
                                         start_date=create_date(start_date, DJANGO_FORMAT),
                                         end_date=create_date(end_date, DJANGO_FORMAT))
                return UpdateWork(work, True)
        else:
            work = Work.objects.create_work(user, title=title, company=company,
                                            start_date=create_date(start_date, DJANGO_FORMAT),
                                            end_date=create_date(end_date, DJANGO_FORMAT))
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
