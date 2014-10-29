(function(){

  var app = angular.module('app', ['templates', 'predictionsApp']);

  app.config([
    '$httpProvider', function($httpProvider) {
      return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);

  // app.controller('PredictionsCtrl', function(){
  //   this.predictionsValue = "Hello angular and rails"
  // });

})();

(function(){
  var predictionsApp = angular.module('predictionsApp', []);

  predictionsApp.controller("PredictionsCtrl", function PredictionsController($scope, PredictionsFactory) {

      $scope.PredictionsFactory = PredictionsFactory;
      $scope.predictions = PredictionsFactory.predictions;

      $scope.getPredictions = function() {
        PredictionsFactory.getPredictions()
        .success(function(data) {
          $scope.predictions = data;
        })
        .error(function(){
          alert("something went wrong!")
        })
      };

      $scope.getPredictions();
    }
  );

  predictionsApp.factory('PredictionsFactory', function PredictionsFactory($http) {
    var factory = {};

    factory.predictions = [];
    factory.getPredictions = function () {
      return $http.get('/predictions.json');
    };

    return factory;
  })

})();


// = require_tree ./postradamus/templates
// = require_tree ./postradamus/modules
// = require_tree ./postradamus/filters
// = require_tree ./postradamus/directives
// = require_tree ./postradamus/models
// = require_tree ./postradamus/services
// = require_tree ./postradamus/controllers