// create web server
var express = require('express');
var app = express();
// create server
var server = require('http').createServer(app);
// create socket.io
var io = require('socket.io')(server);

// create a connection
io.on('connection', function(socket){
  console.log('a user connected');
  // listen to the event 'comment'
  socket.on('comment', function(msg){
    // emit the event 'comment' to all clients
    io.emit('comment', msg);
  });
  // listen to the event 'disconnect'
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// listen on port 3000
server.listen(3000, function(){
  console.log('listening on *:3000');
});