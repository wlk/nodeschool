var bl = require('bl')
var http = require('http')

var url = process.argv[2]

http.get(url, function onResponse(response){
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    console.log(data.toString().length)
    console.log(data.toString())
  }))
})
