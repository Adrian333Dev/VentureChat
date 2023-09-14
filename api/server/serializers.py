from django.utils.translation import gettext_lazy as _


# from drf_spectacular.utils import extend_schema_serializer
from rest_framework.serializers import (
    ModelSerializer,
    ValidationError,
    SerializerMethodField,
)

from .models import Channel, Server


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = "__all__"


class ServerSerializer(ModelSerializer):
    member_count = SerializerMethodField()
    channels = ChannelSerializer(many=True)

    class Meta:
        model = Server
        exclude = ("members",)

    def get_member_count(self, obj):
        if hasattr(obj, "member_count"):
            return obj.member_count
        return None

    def create(self, validated_data):
        channels_data = validated_data.pop("channels")
        server = Server.objects.create(**validated_data)
        # for channel_data in channels_data:
        #     Channel.objects.create(server=server, **channel_data)
        Channel.objects.bulk_create(
            [Channel(server=server, **channel_data) for channel_data in channels_data]
        )
        return server

    def update(self, instance, validated_data):
        channels_data = validated_data.pop("channels")
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.category = validated_data.get("category", instance.category)
        instance.save()
        for channel_data in channels_data:
            channel = Channel.objects.get(id=channel_data.get("id", None))
            channel.name = channel_data.get("name", channel.name)
            channel.description = channel_data.get("description", channel.description)
            channel.topic = channel_data.get("topic", channel.topic)
            channel.save()
        return instance

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["channels"] = ChannelSerializer(
            instance.channels.all(), many=True
        ).data
        count = self.context.get("member_count", False)
        if not count:
            representation.pop("member_count")
        return representation

    def validate(self, data):
        if data["owner"] != self.context["request"].user:
            raise ValidationError({"detail": _("You can't create a server for others")})
        return data
