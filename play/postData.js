// const http = require('http');
// http.createServer((req, res) => {
// const url = req.url;
// const method = req.method;
// if (url === '/') {
// res.write(` 
// <html>
// <head><title>Signup</title></head>
// <body><form action="/messsage" method="POST">
// Firstname: <input name="firstname"> <br />
// Lastname: <input name="lastname"> <br />
// <button type="submit">Send</button></form></body>
// </html>`);
// res.end();
// } else if (url === '/messsage' && method === 'POST') {
// let data = '';
// req.on('data', (chunk) => {
// data += chunk;
// });
// req.on('end', () => {
// console.log(data);
// });
// res.end('Done');
// }
// }).listen(3000);

