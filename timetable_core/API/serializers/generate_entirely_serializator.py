from rest_framework import serializers


class GenerateEntirelySrializator(serializers.Serializer):
    from .groups_serializer import GroupsSerializer
    from .audiences_serializer import AudiencesSerializer
    from .loadplan_serializer import LoadPlanSerializer
    from .pedagogs_serializer import PedagogsSerializer
    from .disciplines_serializer import DisciplinesSerializer

    client_mail = serializers.EmailField(required=True)
    groups = GroupsSerializer()
    au
