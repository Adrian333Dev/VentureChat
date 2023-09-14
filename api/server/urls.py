from rest_framework.routers import DefaultRouter

from .views import ServerViewSet

router = DefaultRouter()

router.register(r"server", ServerViewSet, basename="server")

urlpatterns = router.urls
