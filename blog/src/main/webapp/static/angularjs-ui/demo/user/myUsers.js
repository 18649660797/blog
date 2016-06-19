'use strict';
angular.module('myApp', ['db']).controller("userCtrl", function($scope, $http, jdbc) {
    function reload() {
        jdbc.findAll("customer").then(function(response) {
            if (!response) {
                $http.get("data.json").success(function(response) {
                    $scope.users = response;
                });
                return;
            }
            $scope.users = response;
        });
    }
    jdbc.onload(reload);
    $scope.edit = true;
    var _user = $scope.user = {};
    $scope.editUser = function(user) {
        if (user) {
            _user.id = user.id;
            _user.fName = user.fName;
            _user.lName = user.lName;
            _user.telephone = user.telephone;
        } else {
            _user.fName = "";
            _user.lName = "";
            _user.telephone = "";
            _user.id = "";
        }
    };
    $scope.deleteUser = function(id) {
        jdbc.remove("customer", id).then(reload);
    };
    $scope.saveCustomer = function() {
        jdbc.put("customer", _user).then(reload);
    };
});