var http = require('http')
var strftime = require('strftime')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
  var parsed = url.parse(req.url, true)

  var date = new Date(parsed.query['iso'])

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  if(parsed.pathname == "/api/parsetime"){
    // console.log(parsed);
    // console.log(parsed.query['iso']);
    var response = {
      "hour": Number(strftime('%H', date)),
      "minute": Number(strftime('%M', date)),
      "second": Number(strftime('%S', date))
    }
    res.write(JSON.stringify(response))
  }
  else {
    if(parsed.pathname == "/api/unixtime"){
      var response = {
        "unixtime": Number(strftime('%s%L', date))
      }
      res.write(JSON.stringify(response))
    }
  }
  res.end()
})

server.listen(port)
