from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from server.models import Server
from server.serializers import ServerSerializer
from server.filters import ServerFilter
from server.pagination import ServerPagination

from server.schema import server_view_docs


@server_view_docs
class ServerViewSet(ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ServerFilter
    pagination_class = ServerPagination

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.action == "list":
            context["member_count"] = (
                self.request.query_params.get("member_count", None) == "true"
            )
        return context

    # @action(detail=True, methods=["get"])
    # def channels(self, request, pk=None):
    #     server = self.get_object()
    #     serializer = ChannelSerializer(server.channels.all(), many=True)
    #     return Response(serializer.data)

    # @action(detail=True, methods=["post"])
    # def join(self, request, pk=None):
    #     server = self.get_object()
    #     server.members.add(request.user)
    #     return Response({"detail": _("Successfully joined server")})

    # @action(detail=True, methods=["post"])
    # def leave(self, request, pk=None):
    #     server = self.get_object()
    #     server.members.remove(request.user)
    #     return Response({"detail": _("Successfully left server")})
