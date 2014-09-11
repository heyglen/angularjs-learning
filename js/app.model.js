angular.module('app.model', [])
.factory('ModelService', ['$http', function($http) {
    // http://blog.nebithi.com/angularjs-dos-and-donts/
    var model_url = "/json/";
    var ModelService = {
            data: {
                type: "vlan",
                current: {},
                columns: [],
                all : []
            },
            get : function(id) {
                return $http.get(model_url + ModelService.data.type +"/"+id+'.json')
                    .success(function success(data) {
                        ModelService.data.current = data;
                    })
                    .error(function error() {
                    });
            },
            all : function(){
                // return $http.get(model_url + ModelService.data.type +"/list")
                return $http.get(model_url + ModelService.data.type +"/all.json")
                    .success(function success(data) {
                        ModelService.data.columns = data.columns;
                        ModelService.data.all = data.instances;
                    })
                    .error(function error() {
                    });
            },
            save : function(id){
                return $http.post(model_url + ModelService.data.type +"/",id)
                    .success(function success() {
                        ModelService.all();
                    })
                    .error(function error() {
                    });
            },
            delete : function(id){
                return $http.delete(model_url + ModelService.data.type +"/"+id)
                    .success(function success() {
                        ModelService.all();
                    })
                    .error(function error() {
                    });
            }
    };
    return ModelService;
}]);
