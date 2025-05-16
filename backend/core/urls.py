from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", include('apps.users.urls')),
    path("api/scholarships/", include('apps.scholarships.urls')),
    path("api/ai/", include('apps.ai_assistant.urls')),
    path("api/reminders/", include('apps.reminders.urls')),
    path("api/search/", include('apps.search.urls')),
     path('api/token/', obtain_auth_token)
]
