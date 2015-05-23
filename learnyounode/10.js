var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]


var server = net.createServer(function (socket) {
  var date = new Date()
  socket.write(strftime('%F %H:%M', new Date()) + "\n")
  socket.end()
})

server.listen(port)
