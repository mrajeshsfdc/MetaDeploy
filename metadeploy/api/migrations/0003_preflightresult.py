# Generated by Django 2.1.1 on 2018-10-05 20:17

import django.contrib.postgres.fields.jsonb
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("api", "0002_plan_preflight_flow_name")]

    operations = [
        migrations.CreateModel(
            name="PreflightResult",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("organization_url", models.URLField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "step_results",
                    django.contrib.postgres.fields.jsonb.JSONField(default=dict),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        )
    ]
