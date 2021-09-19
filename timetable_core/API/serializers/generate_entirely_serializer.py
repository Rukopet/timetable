from abc import ABC

from rest_framework import serializers


class GenerateEntirelySerializer(serializers.Serializer):
    from .groups_serializer import GroupsSerializer
    from .audiences_serializer import AudiencesSerializer
    from .loadplan_serializer import LoadPlanSerializer
    from .pedagogs_serializer import PedagogsSerializer
    from .disciplines_serializer import DisciplinesSerializer

    client_mail = serializers.EmailField(required=True)
    groups_list = GroupsSerializer()
    audiences = AudiencesSerializer(many=True)
    disciplines = DisciplinesSerializer(many=True)
    load_plan = LoadPlanSerializer(many=True)
    pedagogs = PedagogsSerializer(many=True)
