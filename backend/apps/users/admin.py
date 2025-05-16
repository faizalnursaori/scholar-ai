from django.contrib import admin
from .models import User, UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'major', 'university', 'degree_level', 'gpa')
    search_fields = ('user__username', 'major', 'university')
    list_filter = ('degree_level',)
    ordering = ('-user__id',)  # sesuaikan kalau ada graduation_year di model, pakai itu

@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
    search_fields = ('username', 'email')
