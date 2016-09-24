var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function() {
  console.log('app started');
});

app.get('/', function(req, res) {
  res.send('hello roger!');
});

app.get('/about', function(req, res) {
  res.send('hello about!');
});

app.get('/contact');
app.post('/contact');
