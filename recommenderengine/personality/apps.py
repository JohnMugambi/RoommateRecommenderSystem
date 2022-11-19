from django.apps import AppConfig
import pathlib

class PersonalityConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'personality'

    MODEL_PATH = Path("model")