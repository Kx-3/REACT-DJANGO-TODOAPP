from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializer import TaskSerializer

# Create your views here.
@api_view(["GET"]) #this scopes the view to only be a get request
def home(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def create(request):
    serializer = TaskSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Task added successfully"})
    else:
        return Response(serializer.errors)
    
@api_view(["GET", "PUT"])
def update(request, id):
    task = get_object_or_404(Task, pk=id)
    if request.method == "PUT":
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Task has been updated successfully"})
        else:
            return Response(serializer.errors)
    elif request.method == "GET":
        serializer = TaskSerializer(task)
        return Response(serializer.data)
    
@api_view(["DELETE"])
def delete(request, id):
    task = get_object_or_404(Task, pk=id)
    task.delete()
    return Response({"message": "Task deleted successfully"})