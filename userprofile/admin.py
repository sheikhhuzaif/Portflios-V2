from django.contrib import admin
from .models import BasicInfo, AddressInfo, Skill, Education, Work, Social

# Register your models here.

admin.site.register(BasicInfo)
admin.site.register(AddressInfo)
admin.site.register(Skill)
admin.site.register(Education)
admin.site.register(Work)
admin.site.register(Social)