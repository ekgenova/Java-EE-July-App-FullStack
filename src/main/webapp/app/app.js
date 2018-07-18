var myApp = angular.module('myApp', []);

// Main Controller
myApp.controller('myApp', ['$scope', function($scope) {


    // set default color

    $scope.changecolor = function(color) {
        $scope.color2 = {
            'color': color
        };
    };

}]);