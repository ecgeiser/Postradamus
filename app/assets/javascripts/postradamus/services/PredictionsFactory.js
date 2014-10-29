predictionsApp.factory('PredictionsFactory', function PredictionsFactory($http) {
  var factory = {};

  factory.predictions = [];
  factory.getPredictions = function () {
    return $http.get('/predictions.json');
  };

  return factory;
})