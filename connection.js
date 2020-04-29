var model = require('./model/messageModel')

exports.onClientConnected = function(sock) {  
    var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
    console.log('new client connected: %s', remoteAddress);

    // sock.on('connect', async function(data) {
    //     console.log('%s Says: %s', remoteAddress, data);
    // });

    sock.write('connection initiated\n');

    sock.on('data', async function(data) {
        console.log('%s Says: %s', remoteAddress, data);
        var value = data.toString().replace(/(\r\n|\n|\r)/gm,"");
        if (value.localeCompare('welcome') === 0) {
          // sock.write('kth open')
          model.getWelcome().then(data => sock.write(data.message));
        }
    });

    sock.on('close',  function () {
      console.log('connection from %s closed', remoteAddress);
    });

    sock.on('error', function (err) {
      console.log('Connection %s error: %s', remoteAddress, err.message);
    });
};
