// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.send('hello roger!');
  res.sendFile(path.join(__dirname,'../index.html'));
});

// route for our about page
router.get('/about', function(req, res) {
  res.send('hello about!');
});

router.get('/contact');
router.post('/contact');
