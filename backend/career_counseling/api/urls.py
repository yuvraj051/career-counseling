from django.urls import path
from .views import StudentList

urlpatterns = [
    path('students/', StudentList.as_view()),  # http://127.0.0.1:8000/api/students/
]
