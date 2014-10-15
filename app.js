var express = require('express');
var app = express();

var site = require('./site');

module.exports = app;

// set app view engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

//set static file directory
app.use(express.static(__dirname + '/public'));

//set app endpoints
require('./site')(app);

app.listen(3000);
console.log('Kuppedup listening at localhost:3000!');
