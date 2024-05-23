# bookings/serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Review, Hotel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'address', 'price_per_night']

class ReviewSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(source='user', queryset=User.objects.all())
    hotel_id = serializers.PrimaryKeyRelatedField(source='hotel', queryset=Hotel.objects.all())
    
    class Meta:
        model = Review
        fields = ['id', 'rating', 'review', 'user_id', 'hotel_id']
