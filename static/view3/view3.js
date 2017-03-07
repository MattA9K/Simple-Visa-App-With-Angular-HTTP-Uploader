'use strict';


function finishAndSubmitApplication() {

    var photo_1 = global_photo_1;
    var photo_2 = global_photo_2;
    var photo_3 = global_photo_3;

    var data = new FormData();
    data.append("full_name", globalVar.full_name);
    data.append("email", globalVar.email);
    data.append("mobile_phone", globalVar.mobile_phone);
    data.append("photo_1", photo_1);
    data.append("photo_2", photo_2);
    data.append("photo_3", photo_3);
    data.append("remarks", globalVar.remarks);
    data.append("branch", globalVar.branch);
    data.append("password", globalVar.password);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "/registrar/visa_account_list/");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "51b775d3-214e-83a0-2e18-35a46f3cfeb4");

    xhr.send(data);
}

angular.module('StarterApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: '/static/view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$scope',
        function ($scope) {

            $scope.form = {
                chk1: false,
                chk2: false
            };

            $scope.agreedToTerms = false;
            $scope.aproovedTransaction = false;

            $scope.storeValuesPage3 = function () {
                // if ($scope.aproovedTransaction == true && $scope.agreedToTerms == true) {
                    globalVar.remarks = $scope.form.remarks;
                    finishAndSubmitApplication();
                // }
            };

            $scope.valuesFromLastPage = {
                full_name: globalVar.full_name,
                email: globalVar.email,
                mobile_phone: globalVar.mobile_phone,
                password: globalVar.password,
                branch: globalVar.branch
            };


        }]);

