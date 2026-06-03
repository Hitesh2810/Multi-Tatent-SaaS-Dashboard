from rest_framework import viewsets
from rest_framework.decorators import action

from common.permissions import TenantScopedPermission, is_super_admin
from payments.models import Payment
from payments.serializers import PaymentSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    permission_classes = [TenantScopedPermission]
    filterset_fields = ["subscription", "status", "payment_method"]

    def get_queryset(self):
        qs = Payment.objects.select_related("subscription", "subscription__tenant")
        if is_super_admin(self.request.user):
            return qs
        return qs.filter(subscription__tenant_id=self.request.user.tenant_id)

    def perform_create(self, serializer):
        subscription = serializer.validated_data.get("subscription")
        if not is_super_admin(self.request.user) and subscription.tenant_id != self.request.user.tenant_id:
            self.permission_denied(self.request, "Cannot create payments outside your tenant.")
        serializer.save()

    def perform_update(self, serializer):
        subscription = serializer.validated_data.get("subscription", serializer.instance.subscription)
        if not is_super_admin(self.request.user) and subscription.tenant_id != self.request.user.tenant_id:
            self.permission_denied(self.request, "Cannot move payments outside your tenant.")
        serializer.save()

    @action(detail=False, methods=["get"])
    def history(self, request):
        return self.list(request)
