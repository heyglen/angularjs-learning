var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory) {
    console.log(myFactory.getData())
    myFactory.reverse()
    console.log(myFactory.getData())
})

app.factory('myFactory', function() {
    var myString = "this is some other data"
    var addToString = function(newstr){
        myString += newstr
    }
    return {
        getData: function(){ return myString },
        setData: function(data){ myString = data },
        addData: addToString
    }
})


app.config(function($provide) {

    // - Delegation will add attributes or methods onto the a
    //   factory without changing the original factory
    // - $delegate is the original instance of the service
    $provide.decorator('myFactory', function($delegate) {
        $delegate.reverse = function() {
            $delegate.setData($delegate.getData().split('').reverse().join(''))
        }
        return $delegate
    })
})
