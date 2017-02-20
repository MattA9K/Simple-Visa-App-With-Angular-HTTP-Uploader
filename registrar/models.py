from django.db import models

# Create your models here.
class ProfileAccount(models.Model):
    auth_user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    photo_1 = models.ImageField(upload_to='static/')
    photo_2 = models.ImageField(upload_to='static/')
    photo_3 = models.ImageField(upload_to='static/')
    mobile_phone = models.CharField(max_length=50, blank=False)
    remarks = models.TextField()
    branch = models.ForeignKey('Branch', related_name='profiles', on_delete=models.CASCADE)
    def __str__(self):
        return self.auth_user.username


class Branch(models.Model):
    name = models.CharField(max_length=50, blank=False)
    def __str__(self):
        return self.name