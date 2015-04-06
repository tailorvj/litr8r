var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var buffer = "";

//serve static files from public folder
app.use('/public', express.static(__dirname + '/public'));

//routes
app.get('/input', function(req, res){
  res.sendFile(__dirname + '/input.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/output.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  io.sockets.connected[socket.id].emit('chat message',buffer);
  socket.on('chat message', function(msg){
    buffer = msg;
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

//.listen(process.env.PORT || 5000)
http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});