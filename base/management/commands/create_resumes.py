import os.path

from django.core.files import File
from django.core.management import BaseCommand
from resumes.models import Resumes

from django.conf import settings


class Command(BaseCommand):
    def get_resume_data(self):
        return [
            {"name": "Blue Sphere 1", "image": "resume-demos/blue_sphere.png"},
            {"name": "Bold Monogram 1", "image": "resume-demos/bold_monogram.png"},
            {"name": "Minimalist 1", "image": "resume-demos/minimalist.png"},
        ]

    def handle(self, *args, **options):
        resumes = self.get_resume_data()
        for resume in resumes:
            r = Resumes.objects.create(template_name=resume.get('name'), demo_image=resume.get('image'))
            r.save()
