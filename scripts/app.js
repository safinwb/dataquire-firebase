angular.module('app', [])
  .controller('appController', function($scope) {
    
    $scope.name = "true";
    $scope.myHome = true;
   //$scope.myValue = "true";
    
    $scope.home= function(){
        $scope.name = "false";
        $scope.myHome = true;
        $scope.mySensor = false;
        
    }
    
    $scope.sens = function(){
        $scope.mySensor = true;
        $scope.myHome = false;
        
    }
    

});