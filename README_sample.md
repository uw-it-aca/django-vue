# app_name

Replace this description for your new application... lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est.

## System Requirements

- Python (3+)
- Docker
- Node

## Development Stack

- Django (3.2)
- Vue (3.2)
- Vite (2.9)
- Vitest (0.10.2)

## Design Stack

- Bootstrap (5.2)
- Bootstrap Icons (1.9.0)

## Installation

Clone the repository

        $ git clone git@github.com:uw-it-aca/app_name.git

Go to your working directory

        $ cd app_name

Copy the sample .env file so that your environment can be run.

        $ cp .env.sample .env

Update any .env variables for local development purposes

## Development (using Docker)

Docker/Docker Compose is used to containerize your local build environment and deploy it to an 'app' container which is exposed to your localhost so you can view your application. Docker Compose creates a 'devtools' container - which is used for local development. Changes made locally are automatically syncd to the 'app' container.

        $ docker-compose up --build

View your application using your specified port number in the .env file

        Demo: http://localhost:8000/

## Testing

### Front-end Testing (using Vitest)

Run Vitest test scripts and generate coverage report

        $ npm run test
        $ npm run coverage

### Linting (using ESLint and Stylelint)

Run ESLint for JS linting

        $ npm run eslint

Run Stylelint for CSS linting

         $ npm run stylelint

### Python Testing (using Django)

Run unittest

        $ docker-compose run --rm app bin/python manage.py test

