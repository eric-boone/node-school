var fs = require('fs');

// the Node.js way: asynchronous
fs.readFile(process.argv[2], function (err, data){
  var string = data.toString();
  var numOfStrings = string.split('\n');
  var total = numOfStrings.length - 1;
  console.log(total);
});
