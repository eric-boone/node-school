var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var serveFile = process.argv[3];

var server = http.createServer(function(request, response) {
  var file = fs.createReadStream(serveFile);
  file.pipe(response);
});
server.listen(portNum);


// official solution
// var http = require('http')
//      var fs = require('fs')
//
//      var server = http.createServer(function (req, res) {
//        res.writeHead(200, { 'content-type': 'text/plain' })
//
//        fs.createReadStream(process.argv[3]).pipe(res)
//      })
//
//      server.listen(Number(process.argv[2]))
