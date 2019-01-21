angular.module('app', [])
  .controller('appController', function($scope) {
    $scope.name = "Not";
    
    $scope.home= function(){
        $scope.name = "Poop";
    }
    
});