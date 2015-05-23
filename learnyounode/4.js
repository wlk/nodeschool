var fs = require('fs')

fs.readFile(process.argv[2], printLines)

function printLines(err, buffer) {
  if(err){
    console.log(err)
  }
  else{
    var text = buffer.toString()
    var lines = text.split("\n").length - 1
    console.log(lines)
  }
}
