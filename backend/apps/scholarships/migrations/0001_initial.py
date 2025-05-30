# Generated by Django 5.2.1 on 2025-05-20 16:21

import apps.scholarships.models
import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("users", "0004_rename_achievments_userprofile_achievements"),
    ]

    operations = [
        migrations.CreateModel(
            name="Scholarship",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(db_index=True, max_length=255)),
                ("provider", models.CharField(db_index=True, max_length=255)),
                ("description", models.TextField()),
                ("source_url", models.URLField(max_length=500)),
                (
                    "source",
                    models.CharField(
                        choices=[
                            ("MANUAL", "Manual Input"),
                            ("SCHOTERS", "Schoters"),
                            ("LPDP", "LPDP"),
                            ("INDBEASISWA", "INDBeasiswa"),
                        ],
                        default="MANUAL",
                        max_length=30,
                    ),
                ),
                (
                    "eligible_majors",
                    models.JSONField(default=apps.scholarships.models.empty_list),
                ),
                (
                    "degree_level",
                    models.JSONField(default=apps.scholarships.models.empty_list),
                ),
                (
                    "min_gpa",
                    models.FloatField(
                        blank=True,
                        null=True,
                        validators=[
                            django.core.validators.MinValueValidator(0.0),
                            django.core.validators.MaxValueValidator(4.0),
                        ],
                    ),
                ),
                (
                    "language_requirements",
                    models.JSONField(default=apps.scholarships.models.empty_dict),
                ),
                ("deadline", models.DateField(db_index=True)),
                (
                    "amount",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        max_digits=10,
                        null=True,
                        validators=[django.core.validators.MinValueValidator(0)],
                    ),
                ),
                (
                    "type",
                    models.CharField(
                        choices=[
                            ("FULL", "Fully Funded"),
                            ("PARTIAL", "Partial"),
                            ("TUITION", "Tuition Waiver"),
                        ],
                        max_length=10,
                    ),
                ),
                ("is_active", models.BooleanField(db_index=True, default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "created_by",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="submitted_scholarships",
                        to="users.userprofile",
                    ),
                ),
            ],
            options={
                "ordering": ["-deadline"],
            },
        ),
        migrations.CreateModel(
            name="UserScholarship",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("SAVED", "Saved"),
                            ("APPLIED", "Applied"),
                            ("WON", "Won"),
                            ("LOST", "Lost"),
                        ],
                        db_index=True,
                        default="SAVED",
                        max_length=10,
                    ),
                ),
                ("applied_date", models.DateField(blank=True, null=True)),
                (
                    "documents",
                    models.JSONField(default=apps.scholarships.models.empty_list),
                ),
                ("notes", models.TextField(blank=True)),
                ("reminder_set", models.BooleanField(default=False)),
                (
                    "scholarship",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="applicants",
                        to="scholarships.scholarship",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="applications",
                        to="users.userprofile",
                    ),
                ),
            ],
        ),
        migrations.AddIndex(
            model_name="scholarship",
            index=models.Index(
                fields=["deadline", "is_active"], name="scholarship_deadlin_d0973d_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="scholarship",
            index=models.Index(
                fields=["provider", "type"], name="scholarship_provide_531d59_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="userscholarship",
            index=models.Index(
                fields=["user", "status"], name="scholarship_user_id_52e7c2_idx"
            ),
        ),
        migrations.AlterUniqueTogether(
            name="userscholarship",
            unique_together={("user", "scholarship")},
        ),
    ]
