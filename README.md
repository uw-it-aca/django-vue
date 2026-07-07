# app_name

[![Build Status](https://github.com/uw-it-aca/django-vue/workflows/Build%2C%20Test%20and%20Deploy/badge.svg)](https://github.com/uw-it-aca/django-vue/actions)
[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/django-vue/badge.svg?branch=main)](https://coveralls.io/github/uw-it-aca/django-vue?branch=main)

This is a template repository used for creating Django-Vue applications. Use this template to create a new project repository.

## Cloning

Clone this template repo as a new repo (command line)

        $ git clone git@github.com:uw-it-aca/django-vue.git <new-repo>

OR.. using the Gihub interface, click on the "Use this template" button. Github will automatically clone this repo and setup everything for you.

## Configuration

After cloning this repo, update the following code in /.github/workflows/init.yml. Change 'app_name' to the desired new app name.

        APP_NAME: app_name

Push the changes to your 'main' repository branch. This will trigger the Github Action to run and apply any configuration changes. The action will self-destruct and leave your repository ready for development moving forward.
