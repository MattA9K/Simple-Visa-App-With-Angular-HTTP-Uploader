from django.http import HttpResponse
from django.template import loader





def index(request):
    template = loader.get_template('index.html')
    context = {
        "message": "Welcome to CiniCrafts official website!",
    }
    return HttpResponse(template.render(context, request))