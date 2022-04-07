import graphene
from graphene.types.generic import GenericScalar

from userprofile.models import BasicInfo, AddressInfo, Skill, Education, Work, Social

from .types import BasicInfoType, AddressType, SkillType, SocialType, WorkType, EducationType
from .utils import create_date, DJANGO_FORMAT
from portfolio.models import Portfolio
from resume.models import Resume


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
    skill = graphene.List(SkillType)
    success = graphene.Boolean()

    class Arguments:
        skill_data = graphene.List(GenericScalar)

    def mutate(self, info, skill_data):
        user = info.context.user
        for data in skill_data:
            if data.get('pk'):
                skill = Skill.objects.filter(id=data.get('pk')).first()
                if skill and skill.user == user:
                    skill = Skill.objects.update_skill(data['pk'], name=data['name'])
            else:
                skill = Skill.objects.create_skill(user, data['name'])

        return UpdateSkill(user.skills.all(), True)


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
            if data.get('pk'):
                education = Education.objects.filter(id=data.get('pk')).first()
                if education and education.user == user:
                    Education.objects.update_education(data.get('pk'), course_name=data['courseName'],
                                                       university=data['university'],
                                                       start_date=create_date(data['startDate'][:10], DJANGO_FORMAT),
                                                       end_date=create_date(data['endDate'][0:10], DJANGO_FORMAT),
                                                       gpa=data['gpa'])
            else:
                education = Education.objects.create_education(user, course_name=data['courseName'],
                                                               university=data['university'],
                                                               start_date=data['startDate'][:10],
                                                               end_date=data['endDate'][:10],
                                                               gpa=data['gpa'])

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
    work = graphene.List(WorkType)
    success = graphene.Boolean()

    class Arguments:
        work_data = graphene.List(GenericScalar)

    def mutate(self, info, work_data):
        user = info.context.user
        for data in work_data:
            if data.get('pk'):
                work = Work.objects.filter(id=data.get('pk')).first()
                if work and work.user == user:
                    Work.objects.update_work(data['pk'], title=data['title'], company=data['company'],
                                             start_date=create_date(data['startDate'][:10], DJANGO_FORMAT),
                                             end_date=create_date(data['endDate'][:10], DJANGO_FORMAT))
            else:
                work = Work.objects.create_work(user, title=data['title'], company=data['company'],
                                                start_date=create_date(data['startDate'][:10], DJANGO_FORMAT),
                                                end_date=create_date(data['endDate'][:10], DJANGO_FORMAT))

        return UpdateWork(user.works.all(), False)


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
        social_data = graphene.List(GenericScalar)

    def mutate(self, info, social_data):
        user = info.context.user
        for data in social_data:
            if data.get('pk'):
                social = Social.objects.filter(id=data.get('pk')).first()
                if social and social.user == user:
                    Social.objects.update_social(data['pk'], platform=data['platform'], user_name=data['username'])
            else:
                social = Social.objects.create_social(user, platform=data['platform'], user_name=data['username'])

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


class SetTemplate(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        template_id = graphene.UUID()

    def mutate(self, info, template_id):
        template = Portfolio.objects.filter(id=template_id).first()
        if template:
            user = info.context.user
            if user.is_authenticated and not user.is_superuser:
                basicinfo = user.basicinfo
                basicinfo.portfolio = template
                basicinfo.save()
                return SetTemplate(success=True)


class SetResume(graphene.Mutation):
    success = graphene.Boolean()

    class Arguments:
        resume_id = graphene.UUID()

    def mutate(self, info, template_id):
        template = Resume.objects.filter(id=template_id).first()
        if template:
            user = info.context.user
            if user.is_authenticated and not user.is_superuser:
                basicinfo = user.basicinfo
                basicinfo.resume = template
                basicinfo.save()
                return SetTemplate(success=True)

