from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import View
from django.views.generic import FormView, TemplateView

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

    # def send_activation_mail(self, user):
    #     user_activation_email(user.id)

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
    template_name = "dashboard_base.html"
