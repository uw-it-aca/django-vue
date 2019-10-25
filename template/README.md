# {{ app_name }

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est.

## System Requirements

- Python (3+)
- Django (2+)
- Docker
- Node

## Setup

Clone this template repo as a new repo

        $ git clone https://github.com/mlavin/django-app-template new-repo
        $ cd new-repo

Create your django app using the AXDD app 'template'

        $ sudo pip3 install django
        $ django-admin startapp --template=template --extension=py,in,md,js,yml,html,json,vue --name Dockerfile,.coveragerc myapp_name .

Delete the 'template'

        $ rm -rf template

## Development (using Docker)

Docker/Docker Compose is used to containerize your local build environment and deploy it to an 'app' container which is exposed to your localhost so you can view your application. Docker Compose creates a 'devtools' container - which is used for local development. Changes made locally are automatically syncd to the 'app' container

        $ docker-compose up

In the case that changes are made to the Dockerfile or docker-compose.yml file, you will need to rebuild the image.

        $ docker-compose up --build

View your application

        Demo: http://localhost:8000/
