# Generated by Django 2.1.2 on 2018-10-17 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("api", "0011_preflightresult_results_blank")]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, upload_to=""),
        )
    ]
