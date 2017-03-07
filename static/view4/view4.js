
'use strict';

angular.module('StarterApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: '/static/view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

    .controller('View4Ctrl', ['$scope',
        function ($scope) {
            


        }]);