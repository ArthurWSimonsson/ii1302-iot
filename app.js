var con = require('./connection')
var net = require('net');
var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();


// const HOST = 'localhost';
const HOST = '192.168.10.231';
const PORT = 3000;

// port forward : 213.114.145.242 portnummer 3001

var server = net.createServer(con.onClientConnected);  
 
// server.listen(PORT, HOST, function() {  
//   console.log('server listening on %j', server.address());
// });

server.listen(appEnv.port || 8080, '0.0.0.0', function() {  
  console.log('server listening on %j', server.address());
});
