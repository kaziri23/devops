var http = require('http');

var server = http.createServer(function (request,response) {
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello World, CI/CD here!");
});

server.listen(8000);
console.log("Server listening at http://localhost:8000/");
