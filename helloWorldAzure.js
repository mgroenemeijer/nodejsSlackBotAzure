<<<<<<< HEAD
var http = require('http');
=======
/*var http = require('http');
>>>>>>> e97e6741906226a2d3090d858d661994a509d81b
var port = process.env.port || 5000;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello W8rld\n');
}).listen(port);
*/

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
