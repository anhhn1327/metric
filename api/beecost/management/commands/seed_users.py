from django.core.management.base import BaseCommand
from beecost.models import User
from faker import Faker
import os

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for User model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing User data...')
        User.objects.all().delete()

        self.stdout.write('Creating seed data for User model...')
        for _ in range(10):
            fake_name = fake.name()
            fake_avatar = fake.lexify(text='??????????????????????')
            User.objects.create(name=fake_name, avatar=fake_avatar)

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
