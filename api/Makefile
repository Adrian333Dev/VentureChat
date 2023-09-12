# Makefile

default: help

## General
.PHONY: package pkg
package pkg:
	@echo "Not implemented yet"

.PHONY: shell sh
shell sh:
	python manage.py shell

## Django

.PHONY: create-migrations cm
create-migrations cm:
	python manage.py makemigrations

.PHONY: migrate m
migrate m:
	python manage.py migrate

.PHONY: create-superuser su
create-superuser su:
	$(eval ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS)))
	@$(if $(ARGS),,$(error You must specify username))
	python manage.py createsuperuser --username $(ARGS) --email $(ARGS)@example.com

.PHONY: runserver rs
runserver rs:
	python manage.py runserver

.PHONY: startproject spr
startproject spr:
	$(eval ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS)))
	@$(if $(ARGS),,$(error You must specify project name))
	django-admin startproject $(ARGS) .

.PHONY: startapp sa
startapp sa:
	$(eval ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS)))
	@$(if $(ARGS),,$(error You must specify app name))
	python manage.py startapp $(ARGS)

.PHONY: test t
test t:
	$(eval ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS)))
	python manage.py test $(ARGS)


.PHONY: install i
install i:
	$(eval ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS)))
	@$(if $(ARGS),,$(error You must specify package name))
	@echo "Installing $(ARGS)..."
	pip install $(ARGS)

.PHONY: save s
save s:
	@echo "Saving packages..."
	pip freeze > requirements.txt

# Help
.PHONY: help
help:
	@echo "Usage: make [command]"
	@echo ""
	@echo "Commands:"
	@echo "  create-migrations, cm     Create migrations"
	@echo "  migrate, m                Apply migrations"
	@echo "  create-superuser, su      Create superuser"
	@echo "  startproject, spr         Create django project"
	@echo "  startapp, sa              Create django app"
	@echo "  help                      Show this help message and exit"