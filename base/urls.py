from django.contrib.auth.decorators import login_required
from django.urls import path, include, re_path
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views

from .forms import ResetPasswordForm, PasswordSetForm
from .views import UserSignUp, LoginView, LogoutView, LandingPage, DashboardView, GenerateResume

from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'parse_resume', ResumeParserView, basename='resume-parser')

urlpatterns = [
    path('signup/', UserSignUp.as_view(), name='signup'),
    path('', LandingPage.as_view(), name='home'),
    path('login', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('dashboard/', login_required(DashboardView.as_view()), name='dashboard'),
    path('dashboard/<path:resource>/', login_required(DashboardView.as_view()), name="dashboard"),
    path('view/<path:resource>/', DashboardView.as_view(), name="view"),
    path('resume/', GenerateResume.as_view(), name="resume"),
    path('change-password/', auth_views.PasswordChangeView.as_view(),
         name='password_change'),

    path('password-change-done/', auth_views.PasswordChangeDoneView.as_view(),
         name='password_change_done'),

    path('reset-password/', auth_views.PasswordResetView.as_view(
        template_name='reset-password.html', form_class=ResetPasswordForm), name='password_reset'),

    path('password-reset-done/', auth_views.PasswordResetDoneView.as_view(
        template_name='reset-password-done.html'), name='password_reset_done'),

    re_path(r"^password-reset-confirm/(?P<uidb64>[0-9A-Za-z]+)/(?P<token>.+)/$",
            auth_views.PasswordResetConfirmView.as_view(form_class=PasswordSetForm,
                                                        template_name='reset-password-confirm.html'),
            name='password_reset_confirm'),

    path('password-reset-complete/', auth_views.PasswordResetCompleteView.as_view(
        template_name='reset-password-complete.html'), name='password_reset_complete'),
    #    path('', include(router.urls))
]
