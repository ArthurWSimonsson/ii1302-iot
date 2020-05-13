var con = require('./connection')
var net = require('net');

/* Author Arthur Simonsson */

/* Net module used to create a server listening for tcp-sockets */

const HOST = '10.166.0.2';
// const HOST = '0.0.0.0';
const PORT = 8080;

var server = net.createServer(con.onClientConnected);  
 
server.listen(PORT, HOST, function() {  
  console.log('server listening on %j', server.address());
});
