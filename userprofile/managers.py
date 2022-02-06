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

    def create_skill(self, user, name):
        skill, created = self.get_or_create(user=user, name=name)
        self.update_skill(skill.id, name=name)
        return skill
