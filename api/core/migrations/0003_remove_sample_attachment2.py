# Generated by Django 4.0.2 on 2022-02-16 17:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_sample_attachment2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sample',
            name='attachment2',
        ),
    ]