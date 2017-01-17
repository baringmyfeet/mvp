var express = require('express');
// var request = require('request');
var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Tennis Enthusiast server has started!');
});

module.exports = app;
