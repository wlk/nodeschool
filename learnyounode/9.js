var http = require('http')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var results = ["a", "b", "c"]
var count = 0

function printResults () {
  for (var i = 0; i < 3; ++i)
    console.log(results[i])
}

function get(url, index){
  http.get(url, function onResponse(response){
    response.setEncoding('utf8');
    var output = ""
    response.on("data", function (data) {
      output += data
    })
    response.on("end", function(){
      results[index] = output
      ++count;
      if(count == 3){
        printResults()
      }
    })
  })
}

get(url1, 0)
get(url2, 1)
get(url3, 2)
