# app_name

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est.

## System Requirements

- Python (3+)
- Django (2+)
- Docker
- Node

## Setup

Clone this template repo as a new repo (command line)

        $ git clone https://github.com/charlon/axdd-django-vue new-repo

OR.. using the Gihub interface, click on the "Use this template" button. Github will automatically clone this repo and setup everything for you.

## Deprecated (skip this step)

Install Django (if you haven't done so already)

        $ sudo pip3 install django

Create your django app using the AXDD app 'template'. The dot is important!

        $ django-admin startapp --template=https://https://github.com/charlon/axdd-django-vue/archive/master.zip --extension=py,in,md,js,yml,html,json,vue --name Dockerfile,.coveragerc myapp_name .


## Replace

repo name

'axdd-django-vue' with 'new-repo'

django app
'app_name' with 'new_app'


## Development (using Docker)

Go to your newly created repository

        $ cd new-repo

Docker/Docker Compose is used to containerize your local build environment and deploy it to an 'app' container which is exposed to your localhost so you can view your application. Docker Compose creates a 'devtools' container - which is used for local development. Changes made locally are automatically syncd to the 'app' container

        $ docker-compose up

In the case that changes are made to the Dockerfile or docker-compose.yml file, you will need to rebuild the image.

        $ docker-compose up --build

View your application

        Demo: http://localhost:8000/
