var http1 = require('http');

http1.createServer(function(req,res){
	
	console.log("Req Hit from Browser");

	res.writeHead(200, {'Content-Type': 'text/html'}); //Status
	
	res.write("<html>")
	res.write("<body>")
	res.write("<h1>Hello World</h1>")
	res.write("</body>")
	res.write("</html>")
	res.end();
	
	
}).listen(3000);