from django.core.management import BaseCommand
from portfolio.models import Portfolio

class Command(BaseCommand):
    def get_portfolio_data(self):
        return [
            {"name": "Modern Minimalist", "image": "portfolio-demos/modern_minimalist.png"},
            {"name": "Space Cadet", "image": "portfolio-demos/space_cadet.png"},
            {"name": "Stay Flo", "image": "portfolio-demos/stay_flo.png"},
        ]

    def handle(self, *args, **options):
        resumes = self.get_portfolio_data()
        for resume in resumes:
            r = Portfolio.objects.create(template_name=resume.get('name'), demo_image=resume.get('image'))
            r.save()
