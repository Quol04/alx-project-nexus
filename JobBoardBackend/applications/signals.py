from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Application
from .tasks import on_application_created

@receiver(post_save, sender=Application)
def application_created_handler(sender, instance, created, **kwargs):
    if created:
        applicant_id = instance.user.id
        employer_user = instance.job.company.user  # adjust if company model stores user
        employer_id = employer_user.id
        job_title = instance.job.title
        applicant_email = instance.user.email
        on_application_created.delay(applicant_id, employer_id, job_title, applicant_email)
