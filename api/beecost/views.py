from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Product, Posts
from .serializers import ProductSerializer

class ProductDetailView(APIView):
    def get(self, request, pk):
        try:
            product = Product.objects.get(pk=pk)
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        except Product.DoesNotExist:
            return Response({"message": "Product not found"}, status=404)
        

class RelatedProductView(APIView):
    def get(self, request, pk):
        try:
            code = Product.objects.filter(pk=pk).values_list('code', flat=True)[0]
            group = code.split('-')[0]
            related_products = Product.objects.filter(code__startswith=group).values('name', 'current_price', 'image')
            return JsonResponse(list(related_products), safe=False)
        except Product.DoesNotExist:
            return Response({"message": "Product not found"}, status=404)


class SuggestionProductView(APIView):
    def get(self, request):
        try:
            suggestion_products = Product.objects.order_by('?')[:20].values('name', 'current_price', 'image')
            return JsonResponse(list(suggestion_products), safe=False)
        except Product.DoesNotExist:
            return Response({"message": "Product not found"}, status=404)            


class Post(APIView):
    def get(self, request):
        try:
            posts = Posts.objects.all().order_by('id')[:3]
            return JsonResponse(list(posts.values()), safe=False)
        except Product.DoesNotExist:
            return Response({"message": "Posts not found"}, status=404)