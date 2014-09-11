angular.module('app', ['app.model.edit', 'app.model.list'])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.mode = {
        list : true,
        edit : false
    };
    $scope.mydata = 'Hello World';
}]);
