var model = require('./model/messageModel')

exports.onClientConnected = function(sock) {  
    var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
    console.log('new client connected: %s', remoteAddress);
   
    // sock.on('connect', async function(data) {
    //     console.log('%s Says: %s', remoteAddress, data);
    //     model.getWelcome().then(data => sock.write(data.message));
    // }); 
    
    sock.on('data', async function(data) {
        console.log('%s Says: %s', remoteAddress, data);
        model.getWelcome().then(data => sock.write(data.message));
    });
    sock.on('close',  function () {
      console.log('connection from %s closed', remoteAddress);
    });
    sock.on('error', function (err) {
      console.log('Connection %s error: %s', remoteAddress, err.message);
    });
};
