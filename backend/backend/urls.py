
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'Gadgetshodai admin'
admin.site.site_title = 'GadgetShodai admin'
admin.site.index_title = 'GadgetShodai administration'


urlpatterns = [
    path('admin/', admin.site.urls), #I think here the problem
    path('api/',include('app.urls')),
]

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


# from django.contrib import admin
# from django.urls import path,include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/',include('app.urls')),
# ]
