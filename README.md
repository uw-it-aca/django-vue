# app_name

[![Build Status](https://github.com/uw-it-aca/django-vue/workflows/Build%2C%20Test%20and%20Deploy/badge.svg)](https://github.com/uw-it-aca/django-vue/actions)
[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/django-vue/badge.svg?branch=main)](https://coveralls.io/github/uw-it-aca/django-vue?branch=main)

This is a template repository used for creating Django-Vue applications. Use this template to create a new project repository.

## System Requirements

- Docker (via Docker Desktop or Orbstack)
- Python (3.12)
- Node (20.11.0 LTS)
- NPM (10.2.4)

## Deployment

- Django-Container (3.1.1)
- Vite (7.3.x)

## Development

- Django (5.x)
- Vue (3.5.x)

## Design

- Bootstrap (5.3.x)
- Bootstrap Icons (1.9.1)

## Testing

- Vitest (4.0.x)
- Vue Test Utils (2.4.x)

## Linting/Formatting (code quality)
- Pycodestyle (2.8.x)
- Biome (2.3.x)
- Stylelint (14.7.x)

## Cloning

Clone this template repo as a new repo (command line)

        $ git clone git@github.com:uw-it-aca/django-vue.git <new-repo>

OR.. using the Gihub interface, click on the "Use this template" button. Github will automatically clone this repo and setup everything for you.

## Configuration

After cloning this repo, update the following code in /.github/workflows/init.yml. Change 'app_name' to the desired new app name.

        APP_NAME: app_name

Push the changes to your 'main' repository branch. This will trigger the Github Action to run and apply any configuration changes. The action will self-destruct and leave your repository ready for development moving forward.
