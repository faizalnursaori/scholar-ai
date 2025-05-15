from django.db import models
from django.contrib.postgres.fields import ArrayField
from apps.users.models import UserProfile


# Create your models here.
class Scholarship(models.Model):
    SCHOLARSHIP_TYPES = [
        ('FULL', 'Fully Funded'),
        ('PARTIAL', 'Partial'),
        ('TUITION', 'Tuition Waiver')
    ]

    name = models.CharField(max_length=255)
    provider = models.CharField(max_length=255)
    description = models.TextField()
    deadline = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    type = models.CharField(max_length=10, choices=SCHOLARSHIP_TYPES)
    eligible_majors = ArrayField(models.CharField(max_length=100), blank=True, default=list)
    min_gpa = models.FloatField(null=True, blank=True)
    language_requirements = models.JSONField(default=dict)
    is_active = models.BooleanField(default=True)
    source_url = models.URLField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class UserScholarship(models.Model):
    STATUS_CHOICES = [
        ('SAVED', 'Saved'),
        ('APPLIED', 'Applied'),
        ('WON', 'Won'),
        ('LOST', 'Lost')
    ]

    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    scholarship = models.ForeignKey(Scholarship, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='SAVED')
    applied_date = models.DateTimeField(null=True, blank=True)
    documents = models.JSONField(default=list)
    notes = models.TextField(blank=True)
    reminder_set = models.BooleanField(default=False)

    class Meta:
        unique_together = ('user', 'scholarship')
