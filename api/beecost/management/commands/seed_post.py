from django.core.management.base import BaseCommand
from beecost.models import Post
from faker import Faker
import os

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for Post model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing Post data...')
        Post.objects.all().delete()

        self.stdout.write('Creating seed data for Post model...')
        for _ in range(3):
            title = fake.text(max_nb_chars=150)
            content = fake.paragraph()
            image = fake.lexify(text='??????????????????????')
            Post.objects.create(title=title,
                                content=content,
                                image=image
                                )

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
