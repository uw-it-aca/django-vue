# axdd-django-vue

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est.

## System Requirements

- Python (3+)
- Django (2+)
- Docker
- Node

## Setup

Clone this template repo as a new repo

        $ git clone https://github.com/charlon/axdd-django-vue new-repo
        $ cd new-repo
        
Delete the current README (this will be replaced by a templated one)
        
        $ rm -rf README.md
        
Install Django (if you haven't done so already)

        $ sudo pip3 install django
    
Create your django app using the AXDD app 'template'. The dot is important!

        $ django-admin startapp --template=template --extension=py,in,md,js,yml,html,json,vue --name Dockerfile,.coveragerc myapp_name .

Delete the 'template' directory

        $ rm -rf template

## Github

Save your new-repo to Gihub
