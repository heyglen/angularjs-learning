var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope) {
    $scope.mydata = {val: ["jake", "jane", "steven", "hank"]}
})
