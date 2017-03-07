from django.db import models
from django.contrib.auth.models import User
from datetime import datetime





class Branch(models.Model):
    name = models.CharField(max_length=50, blank=False)
    def __str__(self):
        return self.name


class VisaAccount(models.Model):
    auth_user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    full_name = models.CharField(max_length=50, blank=False)
    mobile_phone = models.CharField(max_length=50, blank=False)
    remarks = models.TextField()
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE, related_name='account')
    photo_1 = models.ImageField(upload_to='static/')
    photo_2 = models.ImageField(upload_to='static/')
    photo_3 = models.ImageField(upload_to='static/')

    def __str__(self):
        return self.auth_user.username

def getRandomString():
    return

