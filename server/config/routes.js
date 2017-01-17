var request = require('request');
var apiUrl = 'http://api.sportradar.us/tennis-t2/en/schedules/2017-01-01/results.json?api_key=t59wap9bzndhdx5wnqm92uh7';

module.exports = function (app, express) {
  // app.get('/', (req, res) => {
  //   res.render('index');
  // });

  app.get('/players', (req,res) => {
  request(apiUrl, (error, response, body) =>{

    if (!error && response.statusCode == 200) {
      console.log(response.schema) // how to get a particular atrribute
    }
  });
  res.render('players');
  });

};
