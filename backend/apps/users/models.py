from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)

class UserProfile(models.Model):
    DEGREE_LEVELS = [
        ('S1', 'Bachelor'),
        ('S2', 'Master'),
        ('S3', 'PhD')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)
    major = models.CharField(max_length=100)
    university = models.CharField(max_length=255)
    degree_level = models.CharField(max_length=2, choices=DEGREE_LEVELS)
    gpa = models.FloatField()
    graduation_year = models.IntegerField()
    language_scores = models.JSONField(default=dict)
    achievments = models.TextField(blank=True)
    research_experience = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"