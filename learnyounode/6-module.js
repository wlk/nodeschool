var fs = require('fs')

module.exports = function (directory, ext, callback) {
  var extension = "." + ext
  fs.readdir(directory, filterFiles)

  function extensionFilter(fileName){
    return fileName.indexOf(extension, fileName.length - extension.length) !== -1;
  }

  function filterFiles(err, list) {
    if(err){
      return callback(err)
    }
    else{
      return callback(null, list.filter(extensionFilter))
    }
  }
}
