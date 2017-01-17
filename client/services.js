angular.module('tennis.services', [])

.factory('Players', function ($http) {

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
});
