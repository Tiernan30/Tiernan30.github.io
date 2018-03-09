var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var d = new Date();
var UsernameGenerator = require('username-generator');
var usernames = new Array;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  //socket.on('connection', function(){
	//  io.emit('user connected', 'user connected');
  //});
  socket.on('chat message', function(msg){
  io.emit('chat message', msg + " {" + d + "}");
	});
 //socket.on('disconnect', function(){
   //io.emit('user disconnected', 'user disconnected');
 //});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});