angular.module('app-predictions').controller("PredictionsCtrl", [
  '$scope', function($scope) {
    console.log('PredictionsCtrl running');
    return $scope.predictionsValue = "Hello angular and rails";
  }
]);