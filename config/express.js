var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

app.use(express.static('./public'));

consign({cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;
