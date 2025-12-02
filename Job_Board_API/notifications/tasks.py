from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
from .models import Notification
from django.contrib.auth import get_user_model

User = get_user_model()

@shared_task(bind=True, max_retries=3)
def send_application_received_email(self, applicant_id, job_title):
    try:
        user = User.objects.get(pk=applicant_id)
        subject = f"Application received for {job_title}"
        message = f"Hi {user.first_name or user.email},\n\nWe received your application for {job_title}. We'll review and get back to you."
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])
        # also create DB notification
        Notification.objects.create(user=user, message=f"Your application for '{job_title}' was received.")
        return True
    except Exception as exc:
        raise self.retry(exc=exc, countdown=60)

@shared_task
def notify_employer_new_application(employer_id, applicant_email, job_title):
    try:
        user = User.objects.get(pk=employer_id)
        subject = f"New application for {job_title}"
        message = f"User {applicant_email} applied to {job_title}."
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])
        Notification.objects.create(user=user, message=f"New application from {applicant_email} for '{job_title}'.")
        return True
    except User.DoesNotExist:
        return False
