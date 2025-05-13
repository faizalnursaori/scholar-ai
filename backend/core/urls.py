from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", include('apps.users.urls')),
    path("api/scholarships/", include('apps.scholarships.urls')),
    path("api/ai/", include('apps.ai.urls')),
    path("api/reminders/", include('apps.reminders.urls')),
    path("api/search/", include('apps.search.urls')),
]
