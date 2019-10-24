# {{ app_name }

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est.

## System Requirements

- Python (3+)
- Django (2+)
- Docker
- Node

## Setup

Create a new repo

        $ git init
        $ git add .
        $ git remote add origin git@github.com:username/new-repo
        $ cd new-repo

Create your django app using the AXDD app template

        $ sudo pip install django
        $ django-admin startapp --template=https://github.com/charlon/axdd-django-vue/archive/master.zip --extension=py,rst,in <myapp_name>

Push the newly created django app to the repo

        $ git add .
        $ git push

## Development (using Docker)

Docker/Docker Compose is used to containerize your local build environment and deploy it to an 'app' container which is exposed to your localhost so you can view your application. Docker Compose creates a 'devtools' container - which is used for local development. Changes made locally are automatically syncd to the 'app' container

        $ docker-compose up

In the case that changes are made to the Dockerfile or docker-compose.yml file, you will need to rebuild the image.

        $ docker-compose up --build

View your application

        Demo: http://localhost:8000/
