var fs = require('fs')

var dir = process.argv[2]
var extension = "." + process.argv[3]

fs.readdir(dir, filterFiles)

function extensionFilter(fileName){
  return fileName.indexOf(extension, fileName.length - extension.length) !== -1;
}

function filterFiles(err, list) {
  if(err){
    console.log(err)
  }
  else{
    var filtered = list.filter(extensionFilter)
    for(var i = 0; i < filtered.length; ++i){
      console.log(filtered[i])
    }
  }
}
