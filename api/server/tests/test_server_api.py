from decimal import Decimal
import tempfile
import os

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
)
from rest_framework.test import APIClient

from shared.utils.mock_models import mock_user, random_users

from server.models import Server, Category, Channel
from server.serializers import ServerSerializer, ChannelSerializer


User = get_user_model()

"""
class ServerViewSet(ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ServerFilter

    @action(detail=True, methods=["get"])
    def channels(self, request, pk=None):
        server = self.get_object()
        serializer = ChannelSerializer(server.channels.all(), many=True)
        return Response(serializer.data)

    @action(detail=True, methods=["post"])
    def join(self, request, pk=None):
        server = self.get_object()
        server.members.add(request.user)
        return Response({"detail": _("Successfully joined server")})

    @action(detail=True, methods=["post"])
    def leave(self, request, pk=None):
        server = self.get_object()
        server.members.remove(request.user)
        return Response({"detail": _("Successfully left server")})
"""


class ServerAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(**mock_user(name="John Doe"))
        self.client.force_authenticate(user=self.user)

    def test_create_server(self):
        # test that a server can be created
        url = reverse("server-list")
        data = {"name": "Test Server", "description": "Test Description"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        self.assertEqual(response.data["name"], data["name"])
        self.assertEqual(response.data["description"], data["description"])
        self.assertEqual(response.data["owner"], self.user.id)
