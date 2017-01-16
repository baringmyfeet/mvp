var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/players', (req,res) => {
  request('https://api.sportradar.com/tennis-t2/en/players/sr:competitor:18378/profile.json?api_key=t59wap9bzndhdx5wnqm92uh7', (error, res, body) =>{

    if(!error && res.statusCode === 200) {
      console.log(body);
    }
  });
  res.render('players');
});

app.listen(8000, () => {
  console.log('Tennis Enthusiast server has started!');
});
