from django.http import HttpResponse
from django.template import loader
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, viewsets
from django.contrib.auth.models import User

from registrar.models import Branch, VisaAccount
from registrar.serializers import BranchSerializer, VisaAccountSerializer, UserSerializer


def index(request):
    template = loader.get_template('index.html')
    context = {
        "message": "Welcome to CiniCrafts official website!",
    }
    return HttpResponse(template.render(context, request))


class BranchList(APIView):
    def get(self, request, format=None):
        branches = Branch.objects.all()
        serializer = BranchSerializer(branches, many=True)
        return Response(serializer.data)



class VisaAccountList(APIView):
    def get(self, request, format=None):
        snippets = VisaAccount.objects.all()
        serializer = VisaAccountSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request):
        full_name_post = str(request.data['full_name'])
        email_post = str(request.data['email'])
        mobile_phone_post = str(request.data['mobile_phone'])
        remarks_post = str(request.data['remarks'])
        branch_post = str(request.data['branch'])
        password_post = str(request.data['password'])

        user_object = User.objects.create_user(email_post, email_post, password_post)
        user_object.first_name = full_name_post
        user_object.save()

        branch_object = Branch.objects.get(name=branch_post)
        serializer = VisaAccountSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(auth_user=user_object, branch=branch_object)
            return Response({"result": "created"}, status=status.HTTP_201_CREATED)
        return Response({"result": "error"}, status=status.HTTP_400_BAD_REQUEST)



class VisaAccountDetail(APIView):
    def get_object(self, pk):
        try:
            return VisaAccount.objects.get(pk=pk)
        except VisaAccount.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        account = VisaAccount.get_object(pk)
        serializer = VisaAccountSerializer(account)
        return Response(serializer.data)

    def patch(self, request, pk, format=None):
        account = VisaAccount.get_object(pk)
        serializer = VisaAccountSerializer(account, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)



class UserList(APIView):
    def get(self, request, format=None):
        query = User.objects.all()
        serializer = UserSerializer(query, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)