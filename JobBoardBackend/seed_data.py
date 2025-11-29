import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from accounts.models import User
from companies.models import Company
from jobs.models import Job
from applications.models import Application
from notifications.models import Notification
from django.contrib.auth.hashers import make_password

# -----------------------------
# CONFIGURATION
NUM_USERS = 10
NUM_COMPANIES = 5
NUM_JOBS = 15
MAX_APPLICATIONS_PER_USER = 3
# -----------------------------

print("Seeding data...")

# Clear existing data (optional)
Notification.objects.all().delete()
Application.objects.all().delete()
Job.objects.all().delete()
Company.objects.all().delete()
User.objects.filter(is_superuser=False).delete()

# Create users
users = []
for i in range(1, NUM_USERS + 1):
    user = User.objects.create(
        username=f"user{i}",
        email=f"user{i}@example.com",
        password=make_password("Password123")  # All users use same password
    )
    users.append(user)

print(f"Created {len(users)} users")

# Create companies
company_names = ["TechCorp", "InnovateLtd", "DevSolutions", "NextGenTech", "AlphaSoft"]
companies = []
for name in company_names[:NUM_COMPANIES]:
    company = Company.objects.create(
        name=name,
        location=random.choice(["Nairobi", "Mombasa", "Kisumu", "Eldoret"])
    )
    companies.append(company)

print(f"Created {len(companies)} companies")

# Create jobs
jobs = []
job_titles = ["Django Developer", "React Developer", "React Native Developer",
              "Frontend Engineer", "Backend Engineer", "Fullstack Developer", "Data Scientist"]
for _ in range(NUM_JOBS):
    job = Job.objects.create(
        title=random.choice(job_titles),
        description="This is a job description for testing purposes.",
        company=random.choice(companies)
    )
    jobs.append(job)

print(f"Created {len(jobs)} jobs")

# Create applications
applications = []
for user in users:
    applied_jobs = random.sample(jobs, k=random.randint(1, MAX_APPLICATIONS_PER_USER))
    for job in applied_jobs:
        application = Application.objects.create(
            user=user,
            job=job,
            status=random.choice(["applied", "interview", "rejected", "accepted"])
        )
        applications.append(application)

print(f"Created {len(applications)} applications")

# Create notifications
notifications = []
for user in users:
    for _ in range(random.randint(1, 3)):
        notification = Notification.objects.create(
            user=user,
            message=f"Hello {user.username}, this is a notification for testing.",
            read=random.choice([True, False])
        )
        notifications.append(notification)

print(f"Created {len(notifications)} notifications")

print("Seeding completed!")
