angular.module('tennis.players', [])

.controller('PlayersController', function($scope,Players) {
  $scope.data = {};

  $scope.getPlayers = function () {
    Players.getPlayers($scope.players)
      .then(function(players) {
        $scope.data.players = players;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
