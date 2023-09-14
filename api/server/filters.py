from django.db.models import Count
from django_filters.rest_framework import BooleanFilter, CharFilter, FilterSet
from rest_framework.exceptions import AuthenticationFailed

from .models import Server


class ServerFilter(FilterSet):
    category = CharFilter(field_name="category__slug", label="category")
    by_user = BooleanFilter(method="filter_by_user", label="by_user")
    member_count = BooleanFilter(method="filter_member_count", label="member_count")

    class Meta:
        model = Server
        fields = ["category", "by_user", "member_count"]

    def filter_by_user(self, queryset, name, value):
        if value:
            if self.request.user.is_authenticated:
                return queryset.filter(owner=self.request.user)
            else:
                raise AuthenticationFailed()
        return queryset

    def filter_member_count(self, queryset, name, value):
        if value:
            return queryset.annotate(member_count=Count("members"))
        return queryset
