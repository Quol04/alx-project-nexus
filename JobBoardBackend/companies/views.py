from rest_framework import viewsets
from .models import Company
from .serializers import CompanySerializer
from accounts.permissions import IsRecruiter

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsRecruiter]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
