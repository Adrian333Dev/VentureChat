from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiParameter, extend_schema, extend_schema_view

from .serializers import ServerSerializer


# Docs for Views

server_view_docs = extend_schema_view(
    list=extend_schema(
        responses=ServerSerializer(many=True),
        parameters=[
            OpenApiParameter(
                name="category",
                description="Filter servers by category",
                location=OpenApiParameter.QUERY,
                required=False,
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name="by_user",
                description="Filter servers by current user",
                location=OpenApiParameter.QUERY,
                required=False,
                type=OpenApiTypes.BOOL,
            ),
            OpenApiParameter(
                name="member_count",
                description="Include member count in response",
                location=OpenApiParameter.QUERY,
                required=False,
                type=OpenApiTypes.BOOL,
            ),
        ],
        description="List of servers with optional filters",
        tags=["servers"],
        operation_id="server_list",
        summary="List of servers with optional filters",
    ),
    retrieve=extend_schema(
        responses=ServerSerializer(),
        description="Retrieve a server by id",
        tags=["servers"],
        operation_id="server_retrieve",
        summary="Retrieve a server by id",
    ),
    create=extend_schema(
        responses=ServerSerializer(),
        description="Create a server",
        tags=["servers"],
        operation_id="server_create",
        summary="Create a server",
    ),
    update=extend_schema(
        responses=ServerSerializer(),
        description="Update a server",
        tags=["servers"],
        operation_id="server_update",
        summary="Update a server",
    ),
    partial_update=extend_schema(
        responses=ServerSerializer(),
        description="Partially update a server",
        tags=["servers"],
        operation_id="server_partial_update",
        summary="Partially update a server",
    ),
    destroy=extend_schema(
        responses=ServerSerializer(),
        description="Delete a server",
        tags=["servers"],
        operation_id="server_destroy",
        summary="Delete a server",
    ),
    # channels=extend_schema(
    #     responses=ChannelSerializer(many=True),
    #     description="List of channels for a server",
    #     tags=["servers"],
    #     operation_id="server_channels",
    #     summary="List of channels for a server",
    # ),
    # join=extend_schema(
    #     responses=ServerSerializer(),
    #     description="Join a server",
    #     tags=["servers"],
    #     operation_id="server_join",
    #     summary="Join a server",
    # ),
    # leave=extend_schema(
    #     responses=ServerSerializer(),
    #     description="Leave a server",
    #     tags=["servers"],
    #     operation_id="server_leave",
    #     summary="Leave a server",
    # ),
)
