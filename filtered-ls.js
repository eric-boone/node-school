var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileExtension = '.' + process.argv[3];

fs.readdir(directory, function (err, list){
  list.forEach(function (file){
    if(path.extname(file) === fileExtension){
      console.log(file);
    }
  });
});
