angular.module('tennis.players', [])

.controller('PlayersController', function($scope,Players) {
  $scope.data = {};
  $scope.playersAry = [];
  $scope.getPlayers = function () {
    Players.getPlayers($scope.players)
      .then(function(players) {
        $scope.playersAry.push(players);
        $scope.data.players = $scope.playersAry;
        $scope.players = null;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
