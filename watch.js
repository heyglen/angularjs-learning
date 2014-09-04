var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope) {
    $scope.mydata = {val: "hello world"}
    $scope.$watch('mydata.val', function(new_value) {
        $scope.mydata.toolong = new_value.length > 10
    })
})
