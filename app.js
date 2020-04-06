var con = require('./connection')
var net = require('net');

// const HOST = 'localhost';
const HOST = '192.168.10.231';
const PORT = 3000;

var server = net.createServer(con.onClientConnected);  
 
server.listen(PORT, HOST, function() {  
  console.log('server listening on %j', server.address());
});
