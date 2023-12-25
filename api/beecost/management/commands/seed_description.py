from django.core.management.base import BaseCommand
from beecost.models import Description, Product
from faker import Faker
import os

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for Description model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing Description data...')
        Description.objects.all().delete()

        self.stdout.write('Creating seed data for PlaceOfSell model...')
        types = ['IMPORTANT', 'TS', 'WP']
        for i in range(10):
            product = Product.objects.get(pk=i)
            type = types[0]
            content = fake.lexify(text='??????????????????????')
            Description.objects.create(type=type, content=content, product=product)

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
