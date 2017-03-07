from rest_framework import serializers
from registrar.models import Branch, VisaAccount
from django.contrib.auth.models import User



class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ('name','id',)


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create(**validated_data)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'email')


class VisaAccountSerializer(serializers.ModelSerializer):
    auth_user = UserSerializer(many=False, read_only=False, required=False)
    branch = BranchSerializer(many=False, read_only=False, required=False)
    full_name = serializers.CharField(max_length=150, required=True)
    mobile_phone = serializers.CharField(max_length=150, required=False)
    remarks = serializers.CharField(max_length=750, required=False)

    photo_1 = serializers.ImageField(use_url=True, allow_empty_file=False)
    photo_2 = serializers.ImageField(use_url=True, allow_empty_file=False)
    photo_3 = serializers.ImageField(use_url=True, allow_empty_file=False)

    class Meta:
        model = VisaAccount
        fields = ('auth_user',
                  'full_name',
                  'mobile_phone',
                  'remarks',
                  'branch',
                  'photo_1',
                  'photo_2',
                  'photo_3'
                  )
