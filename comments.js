// Create web server
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // set the response header
  res.write('Hello World'); // write the response body
  res.end(); // end the response
});

server.listen(5000, function() {
  console.log('Node.js web server at port 5000 is running..');
});