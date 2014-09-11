angular.module('app.model.list', ['app.model'])
.controller('modelListCtrl', ['$scope', 'ModelService', function($scope, ModelService){

    $scope.editModel = function(model) {
        ModelService.get(model.primary_key).then(function (data) {
            // Broadcast a change view???
        });
    };

    ModelService.data.type = 'vlan';

    ModelService.all().then(function (data) {
        $scope.columns = ModelService.data.columns;
        $scope.all = ModelService.data.all;
    });


}])
.directive('modelList', [function() {
    return {
        restrict: 'E',
        templateUrl: 'modelList.html'
    }
}]);
