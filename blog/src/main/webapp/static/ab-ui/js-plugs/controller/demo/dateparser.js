angular.module('demo-app', ['ui.bootstrap.dateparser']).controller('DateParserDemoCtrl', function ($scope, uibDateParser) {
    $scope.format = 'yyyy/MM/dd';
    $scope.date = new Date();
});