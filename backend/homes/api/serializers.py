from rest_framework.serializers import ModelSerializer
from ..models import Home


class HomeSerializer(ModelSerializer):
    class Meta:
        model = Home
        fields = ('id', 'title', 'body')
