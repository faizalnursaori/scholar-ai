from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    ProfileView,
    CurrentUserView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('me/', CurrentUserView.as_view(), name='current-user'),
]