from abc import abstractmethod, ABCMeta


class ModuleForFitnessFunctionBase:
    __metaclass__ = ABCMeta

    def __init__(self, shared_data, settings):
        self.__data_class = shared_data
        self.__settings = settings

    @abstractmethod
    def get_fitness_penalty(self):
        pass

    @abstractmethod
    def get_module_description(self):
        pass

    @abstractmethod
    def get_module_naming(self):
        pass