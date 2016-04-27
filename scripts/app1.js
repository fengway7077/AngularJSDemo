//keo file angular.min.js de co goi y
/// <reference path="angular.min.js" /> 


////create a module c1
//var myApp = angular.module('myModule', []);
////cach khai bao 2
//myApp.controller('myController', function ($scope) {
//    var employee = {
    
//        FirstName: "Mark",
//        LastName: "Hastings",
//        Gender:"Male"
//    }
//    $scope.employee = employee;
//});


//create a module c2
var myApp = angular.module('myModule', [])
    .controller('myController', function ($scope) {
    var employee = {

        FirstName: "Mark",
        LastName: "Hastings",
        Gender: "Male"
    }
    $scope.employee = employee;
});
