from django.shortcuts import get_object_or_404
from django.conf import settings
from django.db.models import (
    Model,
    CharField,
    TextField,
    FileField,
    ImageField,
    ForeignKey,
    ManyToManyField,
    CASCADE,
    PROTECT,
)
from django.db.models.signals import pre_delete
from django.dispatch import receiver

from autoslug import AutoSlugField

from .validators import validate_icon_image_size, validate_image_file_exstension

USER = settings.AUTH_USER_MODEL


def category_icon_path(instance, filename):
    return f"category_icons/{instance.slug}/{filename}"


def server_icon_path(instance, filename):
    return f"server_icons/{instance.slug}/{filename}"


def server_banner_path(instance, filename):
    return f"server_banners/{instance.slug}/{filename}"


class ImageMixin:
    def save(self, *args, **kwargs):
        if self.id:
            existing = get_object_or_404(self.__class__, id=self.id)
            if existing.icon != self.icon:
                existing.icon.delete(save=False)
            if existing.banner != self.banner:
                existing.banner.delete(save=False)
        super().save(*args, **kwargs)

    @receiver(pre_delete)
    def delete_files(sender, instance, **kwargs):
        for field in instance._meta.fields:
            if field.name == "icon" or field.name == "banner":
                file = getattr(instance, field.name)
                if file:
                    file.delete(save=False)


class Category(ImageMixin, Model):
    # Content
    name = CharField(max_length=100)
    slug = AutoSlugField(populate_from="name")
    description = TextField(blank=True, null=True)

    # Media
    icon = FileField(upload_to=category_icon_path, blank=True, null=True)

    def __str__(self):
        return self.name


class Server(ImageMixin, Model):
    # Content
    name = CharField(max_length=100)
    slug = AutoSlugField(populate_from="name")
    description = TextField(blank=True, null=True)

    # Media
    icon = ImageField(
        upload_to=server_icon_path,
        blank=True,
        null=True,
        validators=[validate_icon_image_size, validate_image_file_exstension],
    )
    banner = ImageField(
        upload_to=server_banner_path,
        blank=True,
        null=True,
        validators=[validate_image_file_exstension],
    )

    # Relationships
    owner = ForeignKey(USER, on_delete=CASCADE, related_name="servers_owned")
    category = ForeignKey(Category, on_delete=PROTECT, related_name="servers")
    members = ManyToManyField(USER, related_name="servers_joined")

    def __str__(self):
        return self.name


class Channel(Model):
    # Content
    name = CharField(max_length=100)
    slug = AutoSlugField(populate_from="name")
    description = TextField(blank=True, null=True)
    topic = CharField(max_length=100)

    # Relationships
    server = ForeignKey(Server, on_delete=CASCADE, related_name="channels")

    def __str__(self):
        return self.name
