from django.core.management.base import BaseCommand
from beecost.models import PlaceOfSell
from faker import Faker
import os

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for PlaceOfSell model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing PlaceOfSell data...')
        PlaceOfSell.objects.all().delete()

        self.stdout.write('Creating seed data for PlaceOfSell model...')
        names = ['Shopee', 'Lazada', 'Tiki']
        for i in range(3):
            fake_name = names[i]
            image1 = fake.lexify(text='??????????????????????')
            image2 = fake.lexify(text='??????????????????????')
            PlaceOfSell.objects.create(name=fake_name, image1=image1, image2=image2)

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
