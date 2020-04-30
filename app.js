var con = require('./connection')
var net = require('net');
// var cfenv = require('cfenv');

// var appEnv = cfenv.getAppEnv();


// const HOST = 'localhost';
// const HOST = '35.230.145.234'; // external
// const HOST = '192.168.10.231';
const HOST = '10.154.0.2'; //internal
// const HOST = '0.0.0.0';
const PORT = 6000;

// port forward : 213.114.145.242 portnummer 3001

var server = net.createServer(con.onClientConnected);  
 
server.listen(HOST, PORT, function() {  
  console.log('server listening on %j', server.address());
});

// // server.listen(appEnv.port || 8080, '0.0.0.0', function() {  
// //   console.log('server listening on %j', server.address());
// // });


// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World from GCE!'); 
// });

// app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
// });

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World from GCE!'); 
// });

// app.listen(63000, function () {
//    console.log('Example app listening on port 3000!');
// });
