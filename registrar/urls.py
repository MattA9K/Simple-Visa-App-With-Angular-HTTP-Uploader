from django.conf.urls import url
from registrar import views



urlpatterns = [

    url(r'^branches/$', views.BranchList.as_view(), name='branch_list'),
    url(r'^visa_account_list/$', views.VisaAccountList.as_view(), name='visa_account_list'),
    url(r'^test_account_detail/(?P<pk>[0-9]+)/$', views.VisaAccountDetail.as_view(), name='test_account_detail'),
    url(r'^users/$', views.UserList.as_view(), name='users'),

]
