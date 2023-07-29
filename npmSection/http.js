const http = require('http');

const host = 'localhost';
const port = 3000;



http.createServer((req, res) => {
console.log(req.url, req.method, req.headers);
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello From Node.js</h1></body>');
res.write('</html>');
res.end();
}).listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});