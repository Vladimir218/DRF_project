from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Project
from .models import ToDo


class ProjectSerializer(ModelSerializer):
    users = serializers.StringRelatedField(many=True)
    class Meta:
        model = Project
        fields = '__all__'


class ToDoSerializer(ModelSerializer):

    class Meta:
        model = ToDo
        exclude = ('flag_is_active',)