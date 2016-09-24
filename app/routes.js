var express = require('express');

// route for our homepage
app.get('/', function(req, res) {
  res.send('hello roger!');
});

// route for our about page
app.get('/about', function(req, res) {
  res.send('hello about!');
});

app.get('/contact');
app.post('/contact');
