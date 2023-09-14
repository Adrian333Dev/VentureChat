from django.contrib.admin import site
from .models import Category, Server, Channel


site.register(Category)
site.register(Server)
site.register(Channel)
