from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import HomeViewSet

home_router = DefaultRouter()
home_router.register(r'homes',HomeViewSet)