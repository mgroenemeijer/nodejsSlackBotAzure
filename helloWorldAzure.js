var http = require('http');
var port = process.env.port || 5000;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello W8rld\n');
}).listen(port);
