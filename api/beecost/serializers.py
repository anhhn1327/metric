from rest_framework import serializers
from .models import Product, PlaceOfSell, Review, Description, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'avatar') 

class PlaceOfSellSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceOfSell
        fields = ('name', 'image1', 'image2')

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    place_of_sell = PlaceOfSellSerializer()

    class Meta:
        model = Review
        fields = ('user', 'comment', 'time', 'place_of_sell', 'image1', 'image2', 'image3', 'image4', 'image5')

class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = ('type', 'content')

class ProductSerializer(serializers.ModelSerializer):
    place_of_sell = PlaceOfSellSerializer()
    reviews = ReviewSerializer(many=True, source='review_set')
    descriptions = DescriptionSerializer(many=True, source='description_set')

    class Meta:
        model = Product
        fields = ('name',
                  'place_of_sell',
                  'reviews',
                  'descriptions',
                  'current_price',
                  'old_price',
                  'reduced_price',
                  'point_evaluation',
                  'number_of_reviews',
                  'number_of_sells',
                  'image',
                  )
