var fs = require('fs');
var path = require('path');
// var directory = process.argv[2];
// var fileExtension = '.' + process.argv[3];

module.exports = function(directory, fileExtension, callback){
  fs.readdir(directory, function(err, list){
    if(err){
      return callback(err);
    }
    list = list.filter(function(file){
      return path.extname(file) === '.' + fileExtension;
    });
    callback(null, list);
  });
};

// module.exports = function (args) {
//   fs.readdir(directory, function (err, list){
//     list.forEach(function (file){
//       if(path.extname(file) === fileExtension){
//         console.log(file);
//       }
//     });
//   });
// };
