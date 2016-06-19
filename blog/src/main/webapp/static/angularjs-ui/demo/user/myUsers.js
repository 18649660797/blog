'use strict';
angular.module('myApp', ['db']).controller("userCtrl", function($scope, $http, jdbc) {
    // 刷新数据结构,angularjs的双向绑定会自动帮我们渲染界面
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
    // 数据结构完成之后刷新界面
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
        // 从数据库删除记录之后刷新表格数据
        jdbc.remove("customer", id).then(reload);
    };
    $scope.saveCustomer = function() {
        // 从数据库添加或更新记录之后刷新表格数据
        jdbc.put("customer", _user).then(reload);
    };
    jdbc.find("customer", "customer_fName_index", "林").then(function(data) {
        console.log(data);
    });
});