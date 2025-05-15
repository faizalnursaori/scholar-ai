from django.contrib import admin
from .models import Scholarship, UserScholarship

@admin.register(Scholarship)
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ('name', 'provider', 'type', 'deadline', 'is_active')
    search_fields = ('name', 'provider')
    list_filter = ('type', 'is_active')

@admin.register(UserScholarship)
class UserScholarshipAdmin(admin.ModelAdmin):
    list_display = ('user', 'scholarship', 'status', 'applied_date', 'reminder_set')
    list_filter = ('status', 'reminder_set')
    search_fields = ('user__user__username', 'scholarship__name')  # Jika UserProfile berelasi ke User
