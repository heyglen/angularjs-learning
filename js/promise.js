var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope, $q, $timeout) {
    $scope.mydata = "Old data "

    var defer = $q.defer();

    defer.promise
    .then(function(val) {
        $scope.mydata += val
    })
    .then(function(val) {
        $scope.mydata += val
    })

    $timeout(function() {
        defer.resolve("More Cowbell ")
    }, 3000)
});
