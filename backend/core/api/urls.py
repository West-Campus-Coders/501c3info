from rest_framework.routers import DefaultRouter
from homes.api.urls import home_router
from django.urls import path, include

router = DefaultRouter()

# posts
router.registry.extend(home_router.registry)

urlpatterns = [
    path('', include(router.urls))
]


