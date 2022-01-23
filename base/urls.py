from django.urls import path

from .views import UserSignUp, LoginView, LogoutView, LandingPage, DashboardView

urlpatterns = [
    path('signup/', UserSignUp.as_view(), name='signup'),
    path('', LandingPage.as_view(), name='home'),
    path('login', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]
