# Generated by Django 5.2.1 on 2025-05-17 17:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_alter_userprofile_user"),
    ]

    operations = [
        migrations.RenameField(
            model_name="userprofile",
            old_name="achievments",
            new_name="achievements",
        ),
    ]
