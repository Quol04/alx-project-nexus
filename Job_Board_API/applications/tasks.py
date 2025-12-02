from celery import shared_task
from notifications.tasks import send_application_received_email, notify_employer_new_application

@shared_task
def on_application_created(applicant_id, employer_id, job_title, applicant_email):
    # fire both tasks (can be chained or group)
    send_application_received_email.delay(applicant_id, job_title)
    notify_employer_new_application.delay(employer_id, applicant_email, job_title)
