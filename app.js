var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope) {
	$scope.myarray = [1, 2, 3, 4]

})