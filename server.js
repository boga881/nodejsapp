/*var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'texp/plain'});
	res.end('Hello');
}).listen(1337,'127.0.0.1');
console.log('webserver statered');*/


var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html', function(error,data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
	});
	
}).listen(1337,'127.0.0.1');
console.log('webserver statered');