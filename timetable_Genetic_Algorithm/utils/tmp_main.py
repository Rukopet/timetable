import json
import pandas as pd

from timetable_Genetic_Algorithm.utils.Individ import Individ
from timetable_Genetic_Algorithm.utils.algorithm_settings import AlgorithmSettings
from timetable_Genetic_Algorithm.utils.custom_settings import DataFromFront
from timetable_Genetic_Algorithm.utils.generate_population import generate_individ


def get_data_from_front() -> DataFromFront:
    ret = DataFromFront()
    pd.set_option('display.max_columns', None)
    with open("../data_for_test/disciplines_model.json") as disciplines_json:
        ret.set_disciplines_json(json.load(disciplines_json))
        ret.disciplinesJSON.valueDF.to_csv("../data_for_test/disciplines.csv")
    with open("../data_for_test/group_model.json") as groups_json:
        ret.set_groups_json(json.load(groups_json))
        ret.groupsJSON.valueDF.to_csv("../data_for_test/groups.csv")
    with open("../data_for_test/load_plan.json") as load_plan_json:
        ret.set_load_plan_json(json.load(load_plan_json))
        ret.loadPlanJSON.valueDF.to_csv("../data_for_test/loadPlan.csv")
    with open("../data_for_test/pedagogs_model.json") as pedagogs_json:
        ret.set_pedagogs_json(json.load(pedagogs_json))
        ret.pedagogsJSON.valueDF.to_csv("../data_for_test/pedagogs.csv")
    with open("../data_for_test/auditories.json") as auditories_json:
        ret.set_audiences_json(json.load(auditories_json))
        ret.audiencesJSON.valueDF.to_csv("../data_for_test/audiences.csv")
    return ret


def print_group(individ: dict) -> dict:
    individ_sort = dict(sorted(individ.items()))
    print(*[(key, i) for key, i in individ_sort.items()], sep='\n')
    #group = {audience: audiencesDF[audiencesDF["number_audience"] == audience]["params"].tolist()[0]
    #            for audience in all_audiences}
    return individ_sort


def main():
    front_data = get_data_from_front()

    table_settings = AlgorithmSettings(front_data)
    individ = generate_individ(table_settings)
    pop = Individ(individ, table_settings)
    pop.into_excel_file()
    print(*[(key, i) for key, i in individ.items()], sep='\n')
    groups = print_group(individ)
    print(groups)
    print(table_settings.GROUPS_LIST)


if __name__ == "__main__":
    main()