// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Angie', email: 'angie@planet.io', avatar: 'http://placekitten.com/300/300' },
    { name: 'Tita', email: 'tita@planet.io', avatar: 'http://placekitten.com/400/400' },
    { name: 'Isra', email: 'isra@planet.io', avatar: 'http://placekitten.com/500/500' },
    { name: 'Roger', email: 'roger@planet.io', avatar: 'http://placekitten.com/700/700' }
  ];

  res.render('pages/about', { users: users });
});

// route for our contact page
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  console.log(req.body.message);
});
