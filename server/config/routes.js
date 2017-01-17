var playersController = require('../players/playersController.js')

module.exports = function (app, express) {
  app.post('/api/players', playersController.getPlayers);
};
