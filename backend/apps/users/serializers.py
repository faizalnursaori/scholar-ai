from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import UserProfile, User

class UserProfileSerializer(serializers.ModelSerializer):
     class Meta:
        model = UserProfile
        read_only_fields = ('user',)

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(source='userprofile', required=False)
    email = serializers.EmailField(required=True) 
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_admin', 'profile']
        extra_kwargs = {'password': {'write_only': True}}

def create(self, validated_data):
        profile_data = validated_data.pop('userprofile', None)
        user = User.objects.create_user(**validated_data)
        
        if profile_data:
            UserProfile.objects.create(user=user, **profile_data)
        
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        return user