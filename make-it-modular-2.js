var myModule = require('./make-it-modular-1');
var directory = process.argv[2];
var fileExtension = process.argv[3];

myModule(directory, fileExtension, function(err, list){
  if(err){
    return console.log("There was an error: ", err);
  }

  list.forEach(function (file){
    console.log(file);
  });
});
