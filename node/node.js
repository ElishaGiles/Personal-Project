var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var underscore = require('underscore');

var app = express();

app.use(bodyParser.json());

app.listen(8080, function() {
  console.log('listening on port 8080');
})
