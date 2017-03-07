/**
 * Created by mattmbp on 2/20/17.
 */
'use strict';

angular.module('StarterApp.view1', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/view1', {
            templateUrl: '/static/view1/view1.html',
            controller: 'View1Ctrl'
        });


        // $httpProvider.defaults.headers.post = {'Content-Type': 'multipart/form-data'};
    }])

    .controller('View1Ctrl', ['$scope', '$http',
        function ($scope, $http) {


            var photo_1 = document.getElementsByName('photo_1');
            var photo_2 = document.getElementsByName('photo_2');
            var photo_3 = document.getElementsByName('photo_3');


            $scope.project = {
                full_name: '',
                email: '',
                mobile_phone: ''
            };

            $scope.dummyTest = function () {
                var photo_1 = document.getElementById('input_3').files[0];
                var photo_2 = document.getElementById('input_4').files[0];
                var photo_3 = document.getElementById('input_5').files[0];

                global_photo_1 = photo_1;
                global_photo_2 = photo_2;
                global_photo_3 = photo_3;

                globalVar.full_name = $scope.project.full_name;
                globalVar.email = $scope.project.email;
                globalVar.mobile_phone = $scope.project.mobile_phone;
                $scope.dummy = globalVar;
            };


            $scope.fileDidChange = function () {
                console.log('FILE HAS BEEN CHANGED!!!');
            };

            $scope.storeValuesPage1 = function () {
                if ($scope.project.full_name != '' ||
                    $scope.project.email != '' ||
                    $scope.project.mobile_phone != '') {


                    var photo_1 = document.getElementsByName('photo_1')[0].files[0];
                    var photo_2 = document.getElementsByName('photo_2')[0].files[0];
                    var photo_3 = document.getElementsByName('photo_3')[0].files[0];

                    global_photo_1 = photo_1;
                    global_photo_2 = photo_2;
                    global_photo_3 = photo_3;

                    globalVar.full_name = $scope.project.full_name;
                    globalVar.email = $scope.project.email;
                    globalVar.mobile_phone = $scope.project.mobile_phone;
                    $scope.dummy = globalVar;
                }
            };

            $scope.dummy = {};

            $scope.scanFile = function () {

                /*
                 var theFile = document.getElementById('input_3').value;
                 console.log(theFile);
                 //document.write('<img src="' + file + '" width="150" height="150"/>');
                 var reader = new FileReader();
                 reader.readAsDataURL(theFile);
                 // Closure to capture the file information.
                 reader.onload = (function (theFile) {
                 return function (e) {
                 console.log('image reader is finished!');
                 // Render thumbnail.
                 var span = document.createElement('span');
                 span.innerHTML = ['<img class="thumb" src="', e.target.result,
                 '" title="', escape(theFile.name), '"/>'].join('');
                 document.getElementById('list').insertBefore(span, null);
                 };
                 });
                 */

                console.log('file scanned.');
                var theFile = document.getElementById('input_3').files[0];
                var reader = new FileReader();
                var imgTag = document.getElementById('image_frm');

                reader.addEventListener("load", function () {
                    imgTag.src = reader.result;
                }, false);

                if (theFile) {
                    reader.readAsDataURL(theFile);
                } else {
                    console.log('unable to read the file!');
                }

                var uploadBtn = document.getElementById('input_image');
                var rect = uploadBtn.getBoundingClientRect();
                $scope.ubt = rect.top;
                $scope.ubb = rect.bottom;
                $scope.ubl = rect.left;
                $scope.ubr = rect.right;
            };

            $scope.uploadFileClick = function (i) {
                console.log('click triggered');
                console.log(i);
                var uploadButtons = document.getElementsByName(i);
                var uploadBtn = uploadButtons[0];
                uploadBtn.click();
            };

            $scope.testVar = {};

        }]);


function scanTheFile(i) {
    console.log('file scanned.');
    console.log('input_' + i);


    var theFile = document.getElementsByName(i)[0].files[0];

    var theButton = document.getElementById(i + '_btn');

    var reader = new FileReader();
    var imgTag = document.getElementById(i);

    reader.addEventListener("load", function () {
        imgTag.src = reader.result;
        theButton.innerHTML = theFile.name + ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-icons">cancel</span>';
    }, false);

    if (theFile) {
        reader.readAsDataURL(theFile);
    } else {
        console.log('unable to read the file!');
    }
}



