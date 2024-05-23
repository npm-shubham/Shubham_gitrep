from django.urls import path
from .views import UserCreate, UserList, UserDetail, ReviewListCreate, ReviewDetail, HotelListCreate, HotelDetail

urlpatterns = [
    path('users/', UserCreate.as_view(), name='user-create'),
    path('users/list/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),

    path('hotels/', HotelListCreate.as_view(), name='hotel-list-create'),
    path('hotels/<int:pk>/', HotelDetail.as_view(), name='hotel-detail'),

    path('reviews/', ReviewListCreate.as_view(), name='review-list-create'),
    path('reviews/<int:pk>/', ReviewDetail.as_view(), name='review-detail'),
]
