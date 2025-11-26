from rest_framework import viewsets, filters
from .models import Job, JobCategory, JobType
from .serializers import JobSerializer, JobCategorySerializer, JobTypeSerializer
from accounts.permissions import IsRecruiter

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'location']
    ordering_fields = ['created_at']

    def perform_create(self, serializer):
        serializer.save(company=self.request.user.company_profile)


class JobCategoryViewSet(viewsets.ModelViewSet):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class JobTypeViewSet(viewsets.ModelViewSet):
    queryset = JobType.objects.all()
    serializer_class = JobTypeSerializer
