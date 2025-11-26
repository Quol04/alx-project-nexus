from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from companies.views import CompanyViewSet
from jobs.views import JobViewSet, JobCategoryViewSet, JobTypeViewSet
from applications.views import ApplicationViewSet
from notifications.views import NotificationViewSet
from accounts.views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'job-categories', JobCategoryViewSet)
router.register(r'job-types', JobTypeViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'notifications', NotificationViewSet)



schema_view = get_schema_view(
    openapi.Info(
        title="Job Board API",
        default_version='v1',
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view()),
    path('api/login/', TokenObtainPairView.as_view()),
    path('api/refresh/', TokenRefreshView.as_view()),
    path('api/', include(router.urls)),


    # API Documentation
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0)),
]
