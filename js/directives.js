var app = angular.module('app', ['controllers']);

app.controller('MainController', function($scope) {
    $scope.mydata = {val: ["jake", "jane", "steven", "hank"]}
})


// Isolet scope

// When passing an object-literal {} to the return 'scope' attribute you are saying:
//  Do not inherit scope from parent
//  Do not share scope with any other directives 'photo'
app.directive('photo', [function () {
    return {
        scope: {
            // Directive Isolet Scope
            // @ = One way data binding (updates the directive but not the parent scope)
            publicAttribute : '@html_attribute_name', // '@' takes the value of html_attribute_name
            // The nameing is converted from camelCase to spinal-case (AngularJS attribute) publicAttribute == (HTML) pulic-attribute
            // '@' without the following html_attribute_name will match the public_attribute name to the html_attribute_name
            // This will write to the directive scope but not to any parent scope the directive is in.
            // Editing the attribute within the parent scope will overwrite this!
            // the html_attribute value is interpreted as a string (afte interprelating data)

            // Parent Contoller Scope
            // '=' =Two way data binding (updates the directive and the parent scope model)
            publicAttribute: '='
            // The html_attribute value is interpreted as a object

            // Used for exposing a controller method via a directive
            // See: https://www.youtube.com/watch?v=KpQ2ruVd2Bc&list=PLzJZ3ahfm9Q8pwP88ZRSdjwlwn6lrHzrT&index=29
            publicAttribute: '&'

        }
    };
}])
