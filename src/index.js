const Net = require('net');

class ServerNet {
  constructor(host,port) {
    this.host = host;
    this.port = port;
    }
  getData(cb) {
    const client = new Net.Socket();
    client.setTimeout(3000);
    var obj = {};
    client.connect({ port: this.port, host: this.host }, function() {
    });
    client.on('data', function(chunk) {
      chunk.toString().replace(/\uFFFD/g, '').replace('\u0005', '').replace('{', '').split(';').forEach(prop => {
        if(prop.split(':')[0].length > 0) obj[prop.split(':')[0]] = prop.split(':')[1];
      })
      client.end();
    });
    client.on('end', function() {
      return cb(obj);
    });
  }
}

module.exports = ServerNet
