'use strict';

angular.module('StarterApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: '/static/view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$http',
        function ($scope, $http) {


            $scope.storeValuesPage2 = function () {

                globalVar.password = $scope.form.password;
                globalVar.branch = document.getElementById('branch_name_input').innerText;

            };

            $scope.branches;

            $http({
                method: 'GET',
                url: '/registrar/branches/'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.branches = response.data;

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


            $scope.form = {
                remarks: '',
                branch_name: ''
            };

            $scope.show_password = false;

            $scope.toggleShowPassword = function () {
                $scope.show_password = !$scope.show_password;
            };

            $scope.valuesFromLastPage = {
                full_name: globalVar.full_name,
                email: globalVar.email,
                mobile_phone: globalVar.mobile_phone
            };

        }]);