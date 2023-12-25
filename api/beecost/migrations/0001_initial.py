# Generated by Django 5.0 on 2023-12-21 01:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PlaceOfSell',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/posts/')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='images/avatar/')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('current_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('old_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('reduced_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('point_evaluation', models.DecimalField(decimal_places=2, max_digits=2)),
                ('number_of_reviews', models.IntegerField()),
                ('number_of_sells', models.IntegerField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/product/')),
                ('place_of_sell', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='beecost.placeofsell')),
            ],
        ),
        migrations.CreateModel(
            name='Description',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50)),
                ('content', models.TextField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beecost.product')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('time', models.CharField(max_length=100)),
                ('image1', models.ImageField(blank=True, null=True, upload_to='images/review/')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='images/review/')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='images/review/')),
                ('image4', models.ImageField(blank=True, null=True, upload_to='images/review/')),
                ('image5', models.ImageField(blank=True, null=True, upload_to='images/review/')),
                ('place_of_sell', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beecost.placeofsell')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beecost.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beecost.user')),
            ],
        ),
    ]