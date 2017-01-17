var request = require('request');
// var apiUrl = 'http://api.sportradar.us/tennis-t2/en/players/profile.json?api_key=t59wap9bzndhdx5wnqm92uh7';


module.exports = {
  getPlayers: function (req, res, next) {
    var pid = '';
    var apiKey = '/profile.json?api_key=8g6dccp36bgnkyv2kgs7dr27';
    var apiUrl = 'http://api.sportradar.us/tennis-t2/en/players/';
    console.log('req body', req.body);
    var name = req.body.name;
    if (name === 'Kerber, Angelique') {
      pid = 'sr:competitor:19578';
    } else if (name === 'Williams, Serena') {
      pid = 'sr:competitor:18254';
    } else if (name === 'Radwanska, Agnieszka') {
      pid = 'sr:competitor:19249';
    } else if (name === 'Kvitova, Petra') {
      pid = 'sr:competitor:19836';
    } else if (name === 'Azarenka, Victoria') {
      pid = 'sr:competitor:19017';
    }
    apiUrl = apiUrl+pid+apiKey;
    // res.send('reach server, name is ' +name);
    request(apiUrl, (error, response, body) => {
      body = JSON.parse(body);
      res.send(body);
    })
  }
};
