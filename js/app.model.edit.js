angular.module('app.model.edit', ['app.model', 'app.model.field'])
.controller('modelEditCtrl', ['$scope', 'ModelService', function($scope, ModelService){
    ModelService.data.type = 'vlan';
    ModelService.get(1).then(function (data) {
        $scope.model = ModelService.data.current;
    });

}])
.directive('modelEdit', [function() {
    return {
        restrict: 'E',
        templateUrl: 'modelForm.html'
    }
}]);

angular.module('app.model.field', [])
.directive('modelattr', [function() {
    return {
        restrict: 'E',
        scope: {
            name : '@',
            help : '@',
            type : '@'
        },
        templateUrl: 'modelField.html',
        controller: function ($scope) {
            $scope.placeholder = "";
            $scope.help = "";
            if ($scope.type == "ip") {
                $scope.placeholder = "IP Address";
            };
        }
    }

}]);
