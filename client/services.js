angular.module('tennis.services', [])

.factory('Players', function ($http) {

  var getPlayers = function (name) {
    console.log('name',name);
    return $http({
      method: 'POST',
      url: '/api/players',
      data: name
    })
    .then(function (resp) {
      var name = resp.data.player.name, nationality = resp.data.player.nationality
      dob = resp.data.player.date_of_birth, handedness = resp.data.player.handedness;
      var resTxt = 'Name: ' + name + ', Nationality: ' + nationality
      +', Date of Birth: '+dob+', Handedness: '+handedness;
      return resTxt;
    });
  };

  return {
    getPlayers: getPlayers
  };
});
