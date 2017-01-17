var express = require('express');
// var request = require('request');
var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8000, () => {
  console.log('Tennis Enthusiast server has started!');
});

module.exports = app;
