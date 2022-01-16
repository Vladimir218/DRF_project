from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDoSerializer
from .models import Project, ToDo


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ToDoModelViewSet(ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()