from django.core.management.base import BaseCommand
from beecost.models import Product, PlaceOfSell
from faker import Faker
import random

fake = Faker()

class Command(BaseCommand):
    help = 'Seed data for Product model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Deleting existing Product data...')
        Product.objects.all().delete()

        self.stdout.write('Creating seed data for Product model...')
        for _ in range(35):
            place_of_sell = PlaceOfSell.objects.get(pk=1)
            code = fake.lexify(text='??????????????????????')
            name = fake.lexify(text='??????????????????????')
            current_price = random.randint(100000, 1000000)
            old_price = random.randint(100000, 1000000)
            reduced_price = random.randint(1000, 10000)
            point_evaluation = round(random.uniform(1, 5), 1)
            number_of_reviews = random.randint(1, 1000)
            number_of_sells = random.randint(1, 1000)
            image = fake.lexify(text='??????????????????????')

            Product.objects.create(code=code,
                                   name=name,
                                   current_price=current_price,
                                   old_price=old_price,
                                   reduced_price=reduced_price,
                                   point_evaluation=point_evaluation,
                                   number_of_reviews=number_of_reviews,
                                   number_of_sells=number_of_sells,
                                   place_of_sell=place_of_sell,
                                   image=image
                                   )

        self.stdout.write(self.style.SUCCESS('Seed data created successfully.'))
