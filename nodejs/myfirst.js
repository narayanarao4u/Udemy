var http = require('http');

http.createServer(function (req, res) {
    console.log('hai got a request...');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello Nodejs');
	res.end('Hello World!');
}).listen(8080);
