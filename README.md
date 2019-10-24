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

## Development

Docker/Docker Compose is used to containerize your local build environment
and deploy it to a local container so you can view your application. Docker
is configured to build an empty 'project' and copy the settings files located
in the 'docker' directory.

        $ docker-compose up

In the case that changes are made to the Dockerfile or docker-compose.yml file,
you will need to rebuild the image. In this case, 'app' is the name of the
Docker image for the Django project.

        $ docker-compose up --build

View your application

        Demo: http://localhost:8000/

## Node (local for now)

Install the node dependencies on your local machine (for now). This will create
a local 'node_modules' directory.

         $ npm install

Start the webpack "watch mode". This will leave the webpack compiler running
and compile bundles automatically when changes are made to the source files.
You'll need to restart this command if you make changes to the webpack config.

         $ ./node_modules/.bin/webpack --config webpack.config.js --watch
