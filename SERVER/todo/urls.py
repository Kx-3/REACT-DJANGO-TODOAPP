from django.urls import path
from .views import home, create, update, delete

urlpatterns = [
    path("", home, name="home"),
    path("create/", create, name='create'),
    path("update/<str:id>", update, name='update'),
    path("delete/<str:id>", delete, name='delete')
]