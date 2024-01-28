from django.db import models


# Create your models here.

class Home(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return f"Home: {self.title}"
