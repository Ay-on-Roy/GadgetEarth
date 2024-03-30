from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','usernamre', 'email']