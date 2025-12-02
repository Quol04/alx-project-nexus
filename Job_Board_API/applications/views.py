from rest_framework import viewsets
from .models import Application
from .serializers import ApplicationSerializer
from accounts.permissions import IsJobSeeker

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [IsJobSeeker]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
