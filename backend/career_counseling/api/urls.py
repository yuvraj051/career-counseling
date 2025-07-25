from django.urls import path
from .views import Student_view

urlpatterns = [
    path('students/', Student_view.as_view()),  # http://127.0.0.1:8000/api/students/
     path('students/<str:pk>/', Student_view.as_view(), name='student-detail'), # http://127.0.0.1:8000/api/students/<str:pk>/ for detail view
]
