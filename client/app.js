
angular.module('tennis', [
  'tennis.services',
  'tennis.players',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/players', {
      templateUrl: 'players/players.html',
      controller: 'PlayersController'
    })

    .otherwise({
      redirectTo: '/players'
    });

  // $httpProvider.interceptors.push('AttachTokens');
})
