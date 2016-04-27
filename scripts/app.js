//keo file angular.min.js de co goi y
/// <reference path="angular.min.js" /> 


//create a module
var myApp = angular.module('myModule', []);

//cach khai bao 1
myApp.controller('myController', myController);
function myController($scope) {
    $scope.message = "Angular Js Application cach 1";
}

//cach khai bao 2
myApp.controller('myController2', function ($scope) {
    $scope.message2 = "Angular Js Application cach 2";
});

