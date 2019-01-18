var http = require('http');
var mod = require('./MyModule1.js');

http.createServer(function (req, res) {
    console.log('hai got a request...');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello Nodejs<br>');
	res.write('Module:  ' + mod.log.info('module..') + ' <br>');
	res.write('date:  ' + mod.myDateTime() + ' <br>');
	res.write('req.url :  ' +req.url + ' <br>');
	
	res.end('Hello World!');
}).listen(8080);
