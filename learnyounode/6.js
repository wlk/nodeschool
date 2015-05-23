var mymodule = require('./6-module.js')

var dir = process.argv[2]
var extension = process.argv[3]

mymodule(dir, extension, function(err, list){
    for(var i = 0; i < list.length; ++i){
      console.log(list[i])
}})
