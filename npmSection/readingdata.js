const http = require('http');


const host = 'localhost';
const port = 8000;

http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Signup</title></head>');
		res.write(`<body><form action="/messsage" method="POST">
Firstname: <input name="firstname"> <br />
Lastname: <input name="lastname"> <br />
<button type="submit">Send</button></form></body>`
		);
		res.write('</html>');
		res.end();
	} else if (url === '/messsage' && method === 'POST') {
		let data = '';
		req.on('data', (chunk) => {
			data += chunk;
		});
		req.on('end', () => {
			console.log(data);
		});
		res.end('Done');
	}
}).listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});