'use strict';

var app = angular.module('StarterApp',
    [
        'ngMaterial',
        'ngRoute',
        'StarterApp.view1',
        'StarterApp.view2',
        'StarterApp.view3',
        'StarterApp.view4'
    ]
);

app.config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});

    $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('grey', {
      'default': '600',
        'hue-1':'800',
        'hue-2':'400'
    });
    // PREVENT ANGULAR/DJANGO CONFLICT:
    //$interpolateProvider.startSymbol('[#');
    //$interpolateProvider.endSymbol('#]');
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav',
    function ($scope, $mdSidenav) {

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        var list = [];
        for (var i = 0; i < 100; i++) {
            list.push({
                name: 'List Item ' + i,
                idx: i
            });
        }
        $scope.list = list;

    }]);

var globalVar = {
    full_name: 'john',
    email: '',
    mobile_phone: '',
    photo_1: new File([], ''),
    photo_2: new File([], ''),
    photo_3: new File([], ''),
    remarks: '',
    branch: '',
    password: 'RIGHT???'
};

var global_photo_1;
var global_photo_2;
var global_photo_3;