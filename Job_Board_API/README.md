# JobBoardBackend

Backend API for the JobBoard project — a Django REST framework application
providing job posting, company, applications and notification features.

This README covers local development, Docker-based workflows, testing,
deployment checklist and common troubleshooting steps.

---

## Table of contents

- [Prerequisites](#prerequisites)
- [Quick start (recommended)](#quick-start-recommended)
- [Environment configuration](#environment-configuration)
- [Local development (Windows PowerShell)](#local-development-windows-powershell)
- [Local development (WSL / macOS / Linux)](#local-development-wsl--macos--linux)
- [Docker workflows](#docker-workflows)
- [Running tests](#running-tests)
- [Deployment checklist](#deployment-checklist)
- [Troubleshooting](#troubleshooting)
- [Repository layout](#repository-layout)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Python 3.11 (for local development)
- Git
- Docker Desktop (recommended) or Docker Engine + Docker Compose
- A code editor (VS Code, PyCharm, etc.)

---

## Quick start (recommended)

1. Copy environment example and edit secrets:

```powershell
copy .env.example .env
notepad .env
```

2. Start the Postgres database container (the repository provides a
   `docker-compose.yml` for Postgres 14):

```powershell
docker compose up -d db
```

3. Create a Windows virtual environment, install dependencies, run migrations
   and start the development server:

```powershell
# create/activate venv
python -m venv .venv
& ".venv\Scripts\Activate.ps1"
# install deps
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements.txt
# migrate and run
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Your API will be available at `http://127.0.0.1:8000`.

If you prefer to run the entire stack (DB + app) in Docker see the
"Docker workflows" section below.

---

## Environment configuration

- Copy `.env.example` to `.env` (never commit real secrets to git).
- Important variables:
  - `DJANGO_SECRET_KEY` — keep secret in production
  - `DJANGO_DEBUG` — `False` for production
  - `DJANGO_ALLOWED_HOSTS` — comma-separated hosts for production
  - `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT` — Postgres

The repository includes a `.env.example` file and a `docker-compose.yml`
that maps the host `DB_PORT` to the container `5432` by default.

---

## Local development (Windows PowerShell)

1. Activate the virtualenv:

```powershell
& ".venv\Scripts\Activate.ps1"
```

2. Use the helper script for common tasks (added to this repo):

```powershell
# install venv & requirements
./scripts/dev.ps1 -Command venv-install
# start the Postgres container
./scripts/dev.ps1 -Command compose-up
# run migrations
./scripts/dev.ps1 -Command migrate
# run server locally
./scripts/dev.ps1 -Command run
```

Alternatively, use the `Makefile` targets from Git Bash or WSL:

```bash
make venv-install
make compose-up
make migrate
make run
```

---

## Local development (WSL / macOS / Linux)

Use the same steps but create a venv using the system Python and activate
the Unix-style `bin/activate`:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements.txt
docker compose up -d db
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Important: do not reuse a venv created in WSL from a Windows shell (and vice
versa). If you switch environments recreate the venv.

---

## Docker workflows

The repo contains a `Dockerfile` (Python 3.11) and `docker-compose.yml` to
run PostgreSQL 14. For a single-command dev workflow you can add a `web`
service to `docker-compose.yml` (example supplied in `README.Docker.md`).

Start DB only:

```bash
docker compose up -d db
```

Start full stack (after adding `web` service):

```bash
docker compose up --build
```

Run Django management commands in a running container (when `web` exists):

```bash
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

---

## Running tests

Locally in your venv:

```bash
python manage.py test
```

Or inside the `web` container (if you run Django in Docker):

```bash
docker compose exec web python manage.py test
```

---

## Deployment checklist

Before deploying to production:

- Set `DJANGO_DEBUG=False` and ensure `DJANGO_ALLOWED_HOSTS` is correct.
- Use a secure `DJANGO_SECRET_KEY` via environment variable or secret manager.
- Ensure the production Postgres is 14+ and accessible from the app.
- Collect static files and serve them with a static server (nginx or CDN):

```bash
python manage.py collectstatic --noinput
```

- Use a production WSGI server (gunicorn/uvicorn) behind a reverse proxy.
- Run `python manage.py check --deploy` and address any warnings.
- Ensure backups, monitoring, logging and security groups/firewall are
  configured for your DB and application servers.

---

## Troubleshooting

- "Connection refused" to Postgres:

  - Check `DB_HOST`/`DB_PORT` in `.env`.
  - If Django runs on host and Postgres is a container, `DB_HOST=localhost`
    and the port must be the mapped host port (e.g., 5433 in `.env.example`).
  - If Django runs in a container on the compose network set `DB_HOST=db`.

- "PostgreSQL 14 or later is required (found X)": use the provided
  Postgres 14 container or upgrade your system Postgres.

- Virtualenv errors referencing `/usr/bin` on Windows: recreate the venv
  from the environment you use (PowerShell vs WSL). See `README.Docker.md`
  and `Makefile`/`scripts/dev.ps1` for helpers.

- Docker build issues:
  - Ensure `requirements.txt` is correct for the `Dockerfile` Python
    version (this project uses Python 3.11 in the `Dockerfile`).
  - If binary packages fail, add required `apt` build dependencies to the
    `Dockerfile` (e.g. `libpq-dev`, `build-essential`). The repo's `Dockerfile`
    already includes common deps.

---

## Repository layout (top-level)

- `core/` — Django project settings, WSGI/ASGI, urls
- `accounts/`, `jobs/`, `companies/`, `applications/`, `notifications/` —
  Django apps
- `requirements.txt` — Python dependencies
- `Dockerfile` — production image
- `docker-compose.yml` — local compose configuration (Postgres)
- `Makefile`, `scripts/dev.ps1` — helper commands
- `.env.example` — environment variable template

---

## Contributing

If you want to contribute changes:

1. Create a new branch: `git checkout -b feat/my-change`
2. Run tests and linters locally
3. Open a pull request describing the change

---

I