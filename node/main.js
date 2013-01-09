//create a socket.io server on port 8000
var io = require('socket.io').listen(8000);



//create a server that only listens on the loopback interface on port 3000
//this needs to be made pubically available by the proxy
var http = require('http');

var express = require('express');

var app = express();
app.use(express.bodyParser());
var server = http.createServer(app);

server.listen(3000, 'localhost');


//if /notify gets called on the private interface, we broadcast the message to all the waiting clients
app.post('/notify', function(req, res) {
    var message = req.param('msg', "No message provided");
    console.log("Broadcasting: " + message);
    io.sockets.emit('msg',   message);
    res.end("OK");
});




