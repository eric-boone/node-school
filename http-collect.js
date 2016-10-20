var cs = require('concat-stream');
var http = require('http');
var getURL = process.argv[2];

http.get(getURL, function(response){
  response.setEncoding("utf8");
  response.pipe(cs (function(data){
    console.log(data.length);
    console.log(data);
  }));
});

// official solution that uses bl
//
// var http = require('http')
//      var bl = require('bl')
//
//      http.get(process.argv[2], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//          data = data.toString()
//          console.log(data.length)
//          console.log(data)
//        }))
//      })
