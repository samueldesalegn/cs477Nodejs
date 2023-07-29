const http = require('http');
const fs = require('fs');


const host = 'localhost';
const port = 3000;

http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		fs.createReadStream('webpage.html').pipe(res)

	} else if (url === '/messsage' && method === 'POST') {
		let data = '';
		req.on('data', (chunk) => {
			data += chunk;
		});
		req.on('end', () => {
			fs.writeFile('file.txt', data, ()=>{});
		});
		res.write('<a href="/">home page</a> <br />');
		res.end('Saved Successfully!');
	}
}).listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});