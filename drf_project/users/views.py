from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet, ViewSet

from .models import CustomUser
from .serializers import CustomUserModelSerializer
from rest_framework.decorators import action
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
 

# Create your views here.


class CustomUserModelViewSet(ViewSet):
    renderer_classes = [JSONRenderer]

    def list(self, request):
        users = CustomUser.objects.all()
        serializer = CustomUserModelSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(CustomUser, pk=pk)
        serializer = CustomUserModelSerializer(user)
        return Response(serializer.data)

# 