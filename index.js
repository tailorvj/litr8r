var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs  = require("fs");

//var fs = require('fs'),
//    readline = require('readline');

//var rd = readline.createInterface({
//    input: fs.createReadStream('/public/static/texts.txt'),
//    output: process.stdout,
//    terminal: false
//});

//rd.on('line', function(line) {
//    console.log(line);
//});

function getPhrasesJSON(res) {
  console.log("Request handler random was called.");
  res.writeHead(200, {"Content-Type": "application/json"});
  //var otherArray = ["item1", "item2"];
  //var otherObject = { item1: "item1val", item2: "item2val" };
    fs.readFile(__dirname + '/public/txt/texts.txt', function(err, f){
        var textsArray = f.toString().split('\n');
        // use the array
        var json = JSON.stringify({ 
          textsArray: textsArray
        });
        res.end(json);
    });
}

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

app.get('/phrases.json', function(req, res){
    getPhrasesJSON(res);
});

app.get('/text', function(req, res){
    res.sendFile(__dirname + '/public/txt/texts.txt');
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

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});