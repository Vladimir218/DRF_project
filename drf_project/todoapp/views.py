from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDoSerializer
from .models import Project, ToDo
from rest_framework.renderers import JSONRenderer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    renderer_classes = [JSONRenderer]
    serializer_class = ProjectSerializer
    
    # организация фильтрации через параметры запроса
    # фильтрация с частичным совпадением имени проекта

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all()
        if name:
            projects = projects.filter(name__contains=name)
            
        return projects

class ToDoModelViewSet(ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()

    # организация фильтрации через библиотеку DjangoFilter
    filterset_fields = ['project_id']

    

    