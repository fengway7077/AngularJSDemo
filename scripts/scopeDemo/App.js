/// <reference path="../angular.js" />

var myApp = angular.module('scopeDemo', []);

myApp.controller("classController", classController); //controller 1
myApp.controller("schoolController", schoolController);//controller 2

function classController($scope) {
    $scope.name = " JQuery";
    $scope.sayHello = function () {
        $scope.name = "HELLO" + $scope.name;
    }
};

function schoolController($scope) {
    $scope.name = " AngularJS";
    $scope.sayHello = function () {
        $scope.name = "HELLO2" + $scope.name;
    }
};