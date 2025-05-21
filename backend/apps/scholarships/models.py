from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.users.models import UserProfile

SCHOLARSHIP_TYPES = [
    ('FULL', 'Fully Funded'),
    ('PARTIAL', 'Partial'),
    ('TUITION', 'Tuition Waiver')
]

SOURCE_CHOICES = [
    ('MANUAL', 'Manual Input'),
    ('SCHOTERS', 'Schoters'),
    ('LPDP', 'LPDP'),
    ('INDBEASISWA', 'INDBeasiswa')
]

APPLICATION_STATUS_CHOICES = [
    ('SAVED', 'Saved'),
    ('APPLIED', 'Applied'),
    ('WON', 'Won'),
    ('LOST', 'Lost')
]

def empty_list():
    return []

def empty_dict():
    return {}


class Scholarship(models.Model):

    name = models.CharField(max_length=255, db_index=True)
    provider = models.CharField(max_length=255, db_index=True)
    description = models.TextField()
    source_url = models.URLField(max_length=500)
    source = models.CharField(max_length=30, choices=SOURCE_CHOICES, default='MANUAL')
    
    eligible_majors = models.JSONField(default=empty_list)  
    degree_level = models.JSONField(default=empty_list)  
    min_gpa = models.FloatField(
        null=True, 
        blank=True,
        validators=[MinValueValidator(0.0), MaxValueValidator(4.0)]
    )
    language_requirements = models.JSONField(default=empty_dict)  
    
    deadline = models.DateField(db_index=True)  
    amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        null=True, 
        blank=True,
        validators=[MinValueValidator(0)]
    )
    type = models.CharField(max_length=10, choices=SCHOLARSHIP_TYPES)
    is_active = models.BooleanField(default=True, db_index=True)
    
    # Metadata
    created_by = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL, related_name='submitted_scholarships')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-deadline']  
        indexes = [
            models.Index(fields=['deadline', 'is_active']),  
            models.Index(fields=['provider', 'type']),
        ]
    
    def __str__(self):
        return f"{self.name} ({self.provider})"


class UserScholarship(models.Model):

    user = models.ForeignKey(
        UserProfile, 
        on_delete=models.CASCADE, 
        related_name='applications'
    )
    scholarship = models.ForeignKey(
        Scholarship, 
        on_delete=models.CASCADE, 
        related_name='applicants'
    )
    status = models.CharField(
        max_length=10, 
        choices=APPLICATION_STATUS_CHOICES, 
        default='SAVED',
        db_index=True 
    )
    applied_date = models.DateField(null=True, blank=True)  
    documents = models.JSONField(default=empty_list) 
    notes = models.TextField(blank=True)
    reminder_set = models.BooleanField(default=False) 
    
    class Meta:
        unique_together = ('user', 'scholarship')  
        indexes = [
            models.Index(fields=['user', 'status']),  
        ]
    
    def __str__(self):
        return f"{self.user.user.username} - {self.scholarship.name}"