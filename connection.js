var model = require('./model/messageModel')
var common = require('./helper')

exports.onClientConnected = function(sock) {  
    var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
    console.log('new client connected: %s', remoteAddress);

    sock.write('Connection initiated\n');

    sock.on('data', async function(data) {
        console.log('%s Says: %s', remoteAddress, data);
        var value = data.toString().replace(/(\r\n|\n|\r)/gm,"");
        if (value.localeCompare('welcome') === 0) {
          model.getWelcome().then(data => sock.write(data.message));
        }
        else if (value.localeCompare('time') === 0) {
          sock.write(common.getDateTime())
        }
    });

    sock.on('close',  function () {
      console.log('Connection from %s closed', remoteAddress);
    });

    sock.on('error', function (err) {
      console.log('Connection %s error: %s', remoteAddress, err.message);
    });
};
