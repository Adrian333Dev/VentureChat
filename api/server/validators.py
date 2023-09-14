import os

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from PIL import Image


def validate_icon_image_size(image):
    if image:
        with Image.open(image) as img:
            if img.width > 70 or img.height > 70:
                raise ValidationError(
                    _(
                        "The maximum allowed dimensions for the image are 70x70 - size of image you uploaded: %(width)sx%(height)s"
                    ),
                )


def validate_image_file_exstension(image):
    ext = os.path.splitext(image.name)[1]
    valid_extensions = [".jpg", ".jpeg", ".png", ".gif"]
    if not ext.lower() in valid_extensions:
        raise ValidationError(
            _("Unsupported file extension, must be .jpg, .jpeg, .png"), code="invalid"
        )
    return image
