angular.module('demo-app', ['ui.bootstrap.pager']).controller('PagerDemoCtrl', function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
});