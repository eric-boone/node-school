var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var string = buf.toString();

var numOfStrings = string.split('\n');

var total = numOfStrings.length - 1;

console.log(total);
