from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.urls import reverse
from django.views import View
from django.views.generic import FormView, TemplateView
from rest_framework.fields import FileField
from rest_framework.serializers import Serializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
from django.views.generic import View
from resume_parser.app import predict_
from .forms import LoginForm, SignupForm


class LoginView(FormView):
    form_class = LoginForm
    template_name = "login.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("dashboard"))
        context = {"form": self.form_class()}
        return self.render_to_response(context)

    def post(self, request):
        data = request.POST.copy()
        form = self.form_class(data)
        message = str()
        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect(reverse("dashboard"))
            else:
                message = 'Invalid Username or Password'

        context = {"form": form, "message": message}
        return self.render_to_response(context)


class LandingPage(TemplateView):
    template_name = "index.html"


class LogoutView(View):

    def get(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            logout(self.request)
        return HttpResponseRedirect("/")


class UserSignUp(FormView):
    template_name = "signup.html"
    form_class = SignupForm

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("dashboard"))

        context = {"form": self.form_class()}
        return self.render_to_response(context)

    def check_user(self, email):
        user = User.objects.filter(username=email).first()
        return user

    def post(self, request, *args, **kwargs):
        msg = None
        data = request.POST.copy()
        form = self.form_class(data)
        if form.is_valid():
            name = form.cleaned_data.get('name')
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            extra = {"is_active": True, "first_name": name}
            if not self.check_user(email):
                user = User.objects.create_user(email, email, password, **extra)
                user = authenticate(username=email, password=password)
                login(request, user)
                return HttpResponseRedirect(reverse("dashboard"))
            else:
                msg = 'Email already registered.'
        context = {"form": form, 'message': msg}
        return self.render_to_response(context)


class DashboardView(TemplateView):
    template_name = "dashboard.html"

    def get(self, request, *args, **kwargs):
        user = request.user
        if user.is_authenticated:
            redirect('dashboard')
        if not user.is_authenticated and request.path == reverse('dashboard'):
            redirect('home')

        return self.render_to_response({})


class UploadSerializer(Serializer):
    file_uploaded = FileField()

    class Meta:
        fields = ['file_uploaded']


class ResumeParserView(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def format_data(self, ml_response):
        predictions = ml_response.get('predictions', None)
        initial_data = {}
        if predictions:
            for prediction in predictions:
                if initial_data.get(prediction.get('entity'), None):
                    if isinstance(initial_data.get(prediction.get('entity')), list):
                        initial_data.get(prediction.get('entity')).append(prediction.get('text'))
                    else:
                        initial_data[prediction.get('entity')] = []
                        initial_data.get(prediction.get('entity')).append(prediction.get('entity'))
                        initial_data.get(prediction.get('entity')).append(prediction.get('text'))
                else:
                    initial_data[prediction.get('entity')] = prediction.get('text')
            return initial_data

    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        response = predict_(file_uploaded)
        response = self.format_data(response)
        return Response(response)




class GenerateResume(TemplateView):
    def name_mapping(self, key):
        mapping = {"Blue Sphere": "blue_sphere.html",
                   "Bold Monogram": "bold_monogram.html",
                   "Minimalist": "minimalist.html",
                   }
        return mapping.get(key, None)

    def get_template_names(self):
        user = self.request.user
        basic_info = user.basicinfo
        resume = basic_info.resume
        print(resume.template_name)
        template = self.name_mapping(resume.template_name)
        
        return [template]

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        context['email'] = user.username
        context['name'] = user.get_full_name()
        context['profession'] = user.basicinfo.profession
        context['summary'] = user.basicinfo.about
        context['skills'] = user.skills.all()
        context['address'] = user.address.all().first().get_address()
        context['phone'] = user.basicinfo.phone
        context['links'] = user.socials.all()
        context['works'] = user.works.all()
        context['educations'] = user.education.all()
    
        return context

