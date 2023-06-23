from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/index.html')


def port(request):
    return render(request, 'main/portfolio.html')