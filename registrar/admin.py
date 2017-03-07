from django.contrib import admin

# Register your models here.
from django.contrib import admin
from registrar.models import Branch, VisaAccount


class BranchAdmin(admin.ModelAdmin):
    list_display = ('name',)


class VisaAccountAdmin(admin.ModelAdmin):
    list_display = ('mobile_phone', 'full_name', 'remarks', 'auth_user','photo_1', 'photo_2', 'photo_3',)


admin.site.register(Branch, BranchAdmin)
admin.site.register(VisaAccount, VisaAccountAdmin)