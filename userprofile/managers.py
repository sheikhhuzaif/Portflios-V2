from django.db import models


class BasicInfoManager(models.Manager):
    def update_info(self, pk, about=None, phone=None, gender=None, picture=None, profession=None, dob=None):
        info = self.get(id=pk)
        if about:
            info.about = about
        if phone:
            info.phone = phone
        if gender:
            info.gender = gender
        if picture:
            info.picture = picture
        if profession:
            info.profession = profession
        if dob:
            info.dob = dob
        info.save()
        return info

    def create_info(self, user, about=None, phone=None, gender=None, picture=None, profession=None, dob=None):
        info, created = self.get_or_create(user=user)
        self.update_info(info.id, about=about, phone=phone, gender=gender, picture=picture, profession=profession,
                         dob=dob)
        return info


class AddressManager(models.Manager):
    def update_address(self, pk, country=None, pincode=None, state=None, city=None, address=None):
        addrss = self.get(id=pk)
        if country:
            addrss.country = country
        if pincode:
            addrss.pincode = pincode
        if state:
            addrss.state = state
        if city:
            addrss.city = city
        if address:
            addrss.address = address
        addrss.save()

    def create_address(self, user, country=None, pincode=None, state=None, city=None, address=None):
        addrss, created = self.get_or_create(user=user)
        self.update_address(addrss.id, country=country, pincode=pincode, state=state, city=city, address=address)
        return addrss


class SkillManager(models.Manager):
    def update_skill(self, pk, name=None):
        skill = self.get(id=pk)
        if name:
            skill.name = name
        skill.save()
        return skill

    def create_skill(self, user, name):
        skill, created = self.get_or_create(user=user, name=name)
        self.update_skill(skill.id, name=name)
        return skill


class EducationManager(models.Manager):
    def update_education(self, pk, course_name=None, university=None, start_date=None, end_date=None, gpa=None):
        education = self.get(id=pk)
        if course_name:
            education.course_name = course_name
        if university:
            education.university = university
        if start_date:
            education.start_date = start_date
        if end_date:
            education.end_date = end_date
        if gpa:
            education.gpa = gpa
        education.save()

    def create_education(self, user, course_name, university, start_date, end_date=None, gpa=None):
        education, created = self.get_or_create(user=user, course_name=course_name, university=university,
                                                start_date=start_date)
        self.update_education(education.id, end_date=end_date, gpa=gpa)
        return education


class WorkManager(models.Manager):
    def update_work(self, pk, title=None, company=None, start_date=None, end_date=None):
        work = self.get(id=pk)
        if title:
            work.title = title
        if company:
            work.company = company
        if start_date:
            work.start_date = start_date
        if end_date:
            work.end_date = end_date
        work.save()

    def create_work(self, user, title, company, start_date, end_date=None):
        work, created = self.get_or_create(user=user, title=title, company=company, start_date=start_date)
        self.update_work(work.id, end_date=end_date)
        return work


class SocialManager(models.Manager):
    def update_social(self, pk, platform=None, user_name=None):
        social = self.get(id=pk)
        if platform:
            social.platform = platform
        if user_name:
            social.user_name = user_name
        social.save()

    def create_social(self, user, platform, user_name):
        social, created = self.get_or_create(user=user, platform=platform, user_name=user_name)
        return social
