# Generated by Django 5.0 on 2023-12-21 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beecost', '0002_placeofsell_image1_placeofsell_image2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='current_price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='product',
            name='old_price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='product',
            name='point_evaluation',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='product',
            name='reduced_price',
            field=models.FloatField(),
        ),
    ]
