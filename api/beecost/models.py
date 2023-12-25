from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='images/avatar/', null=True, blank=True)


class PlaceOfSell(models.Model):
    name = models.CharField(max_length=100)
    image1 = models.ImageField(upload_to='images/place_of_sell/', null=True, blank=True)
    image2 = models.ImageField(upload_to='images/place_of_sell/', null=True, blank=True)


class Product(models.Model):
    code = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    current_price = models.FloatField()
    old_price = models.FloatField()
    reduced_price = models.FloatField()
    point_evaluation = models.FloatField()
    number_of_reviews = models.IntegerField()
    number_of_sells = models.IntegerField()
    place_of_sell = models.ForeignKey(PlaceOfSell, on_delete=models.CASCADE, related_name='products')
    image = models.ImageField(upload_to='images/product/', null=True, blank=True)


class Description(models.Model):
    type = models.CharField(max_length=50)
    content = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    place_of_sell = models.ForeignKey(PlaceOfSell, on_delete=models.CASCADE)
    comment = models.TextField()
    time = models.CharField(max_length=100)
    image1 = models.ImageField(upload_to='images/review/', null=True, blank=True)
    image2 = models.ImageField(upload_to='images/review/', null=True, blank=True)
    image3 = models.ImageField(upload_to='images/review/', null=True, blank=True)
    image4 = models.ImageField(upload_to='images/review/', null=True, blank=True)
    image5 = models.ImageField(upload_to='images/review/', null=True, blank=True)    


class Posts(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='images/posts/', null=True, blank=True)