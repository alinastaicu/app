var express = require('express');
var request = require('request');
var cors = require('cors');

var apiServerHost = 'https://api.rechtsschutzversicherung.check24.de/api';
var app = express();

app.use(cors());

app.use('/', function(req, res) {
  var url = apiServerHost + req.url;

  var requestOptions = {
    url: url,
    method: req.method,
    headers: {
      'origin': 'https://vergleich.rechtsschutzversicherung.check24.de',
      'host': 'api.rechtsschutzversicherung.check24.de',
      'accept': 'application/json, text/plain, */*',
      'referer': 'https://vergleich.rechtsschutzversicherung.check24.de/?wp&we&wt&wrsd&wrnt=false&nopro=1&ygri=6000&fs=4&es=1&ccom=false&pes=1&bnoe=0&d=150&pp=4&ia=300000&sortby=amount&sortdesc=false&wp1=ch24_google&wp2=ch24_v_go_co_re&tariffsCount=22',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36'
    }
  };

  request.get(requestOptions, function (err, response, body) {
    if(err) {
      res.sendStatus(500);
    } else if (response.statusCode !== 200) {
      res.sendStatus(response.statusCode);
    } else {
      res.json(JSON.parse(body));
    }
  });
});

app.listen(process.env.PORT || 4000);
