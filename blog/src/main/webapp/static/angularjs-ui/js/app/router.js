app.controller('AlertDemoCtrl', function ($scope) {
    $scope.alerts = [
        {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
        {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
    ];

    $scope.addAlert = function () {
        alert(1);
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
});
app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('alert',{
        url:'/alert',
        views:{
            'viewA':{templateUrl:'../templates/alert.html'}
        }
    }).state('alert.index',{
        url:'/index',
        views:{
            'viewA':{templaterUrl:'../templates/alert.html'}
        }
    })
}]);