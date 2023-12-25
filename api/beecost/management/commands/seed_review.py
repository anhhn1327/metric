from django.core.management.base import BaseCommand
from beecost.models import Review, Product, User, PlaceOfSell
from faker import Faker
import os

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for Review model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing Review data...')
        Review.objects.all().delete()

        self.stdout.write('Creating seed data for Review model...')
        types = ['IMPORTANT', 'TS', 'WP']
        for i in range(10):
            product = Product.objects.get(pk=i)
            user = User.objects.get(pk=i)
            place_of_sell = PlaceOfSell.objects.get(pk=1)
            comment = fake.lexify(text='??????????????????????')
            time = '2 years ago'
            image1 = fake.lexify(text='??????????????????????')
            image2 = fake.lexify(text='??????????????????????')
            image3 = fake.lexify(text='??????????????????????')
            image4 = fake.lexify(text='??????????????????????')
            image5 = fake.lexify(text='??????????????????????')
            Review.objects.create(product=product,
                                  user=user,
                                  place_of_sell=place_of_sell,
                                  comment=comment,
                                  time=time,
                                  image1=image1,
                                  image2=image2,
                                  image3=image3,
                                  image4=image4,
                                  image5=image5
                                  )

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
