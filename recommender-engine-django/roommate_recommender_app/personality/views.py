from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):

    #get questionnaire answers
    #serialize them
    #return json
    return HttpResponse("Hello, there. This app classifies your personality.")