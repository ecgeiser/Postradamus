(function(){

  var app = angular.module('app', ['templates', 'predictionsApp']);

  app.config([
    '$httpProvider', function($httpProvider) {
      return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);

})();

(function(){
  var app = angular.module('predictionsApp', []);

  app.controller("PredictionsCtrl", function PredictionsController($http, $scope, PredictionsFactory) {

      $scope.PredictionsFactory = PredictionsFactory;
      $scope.predictions = PredictionsFactory.predictions;

      $scope.getPredictions = function() {
        PredictionsFactory.getPredictions()
        .success(function(data) {
          $scope.predictions = data;
        })
        .error(function(){
          alert("something went wrong with fetching the predictions!");
        })
      };

      $scope.getPredictions();

      $scope.addPrediction = function(prediction) {
        $http.post('/predictions.json', {body: prediction.body, upvotes: 0, downvotes: 0})
          .success(function(data) {
            $scope.predictions = data;
          })
          .error(function(){
            alert("something went wrong with creating a new prediction!");
        });
      };

      $scope.incrementUpVote = function(predictionId, votes) {
        votes += 1
        $http.put('/predictions/' + predictionId + '.json', {upvotes: votes})
          .success(function(data) {
            console.log(data);
          })
          .error(function(){
            alert("something went wrong with upvoting!");
        });
      };

      $scope.incrementDownVote = function(predictionId, votes) {
        votes += 1
        $http.put('/predictions/' + predictionId + '.json', {downvotes: votes})
          .success(function(data) {
            console.log(data);
          })
          .error(function(){
            alert("something went wrong with downvoting!");
        });
      };

    }
  );

  app.factory('PredictionsFactory', function PredictionsFactory($http) {
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