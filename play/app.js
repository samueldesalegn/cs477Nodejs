// let hello = require('./hello');
// hello();
const fs = require('fs');

const path = require('path');
// console.log(path.dirname('Buffer'));

// const name = 'joe';
// console.log(path.join('users', name, 'notes.txt'));
// console.log(__dirname)

// const greet = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf8');
// console.log(greet);
// const greet2 = fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', (err, data)=> console.log(data));
// console.log('Done!');

// fs.readFile('hello.txt','utf8', (err, data) => console.log(data));

// Writing to a file:
// fs.writeFile('students.txt', 'Hello World!', (err) => {
// 	if (err) throw err;
// 	console.log('Done');
// 	});


const http = require('http');
// http.createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/html' });
// 	let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
// 	html = html.replace('{Message}', 'Samuel Practicing!');
// 	res.end(html);
// }).listen(3000, () => { console.log('listening on 3000...') });

// const server = http.createServer();

// server.on('request', (req, res) => {
// 	fs.createReadStream('./index.html').pipe(res);
// 	});
// 	server.listen(8000);




http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Node</title></head>');
	res.write('<body><h1>Hello From Nodejs, Great Jouney started</h1></body>');
	res.write('</html>');
	res.end();
	}).listen(3000);
