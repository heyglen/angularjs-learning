var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function($scope, constService, valService, myFactory, Auth, myService) {
    Auth.setUser("ghar")
    $scope.user = Auth.getUser()
    $scope.myData = myService.getData()
    $scope.exposed = myService.exposed_attribute
})

// Constant Service
// Cannot be modified by a decorator
app.constant('constService', {
    attr: "This is constant data"
})

// Value Service
// Can be modified by a decorator
app.value('valService', function() {
    return "This is returned from a fn"
})

app.factory('Auth', function(){
    // Private Data
    var current_user = {}
    var fn = function(){}
    // Public Data
    return {
        setUser: function(user) {
            current_user = user
        },
        getUser: function() {
            return current_user
        },
        login: function() {},
        logout: function() {}
    }
})

// Factory
// Singleton
app.factory('myFactory', function(){
    // Private Data
    var private_attribute = {}
    var private_method = function(){}
    // Public Data
    return {
        public_method: function() {},
        public_attribute: "blah"
    }
})

// Instanciated
// Used in coffee script???
app.service('myService', function(){
    var private_attribute = "Private"
    var private_method = function(){}
    // Public Data
    this.public_attribute = "Exposed"
    this.public_method = function () {
        return myData
    }
})

// myTest is expanded to myTestProvider
// Providers are initalized on angualr startup... before other services
app.provider('myTest', function(){
    var private_attribute = "Private"
    var private_method = function(){}
    return {
        public_method: function(){},
        setData: function(data){
            private_attribute = data
        },
        $get: function() {
            return {
                public_method: function(){
                    return "Provider Return " + private_attribute
                }
            }
        },
        public_method: private_method
    }
})

app.config(function(myTestProvider) {
    myTestProvider.setData("Initialized")
})
