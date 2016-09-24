var http = require('http');

function handleRequests(req,res) {
  res.end('Hello roger!');
}

var server = http.createServer(handleRequests);
