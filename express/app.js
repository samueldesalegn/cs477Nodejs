const express = require('express');

const app = express();
const host = 'localhost';
const port = process.env.PORT || 3000;

// app.use('/', (req, res, next) => {
// 	console.log('This middleware always run!');
// 	next();
// });
// app.use('/add-product', (req, res, next) => {
// 	console.log('In the middleware!');
// 	res.send('<h1>The "Add Product" Page</h1>');
// });
// app.use('/', (req, res, next) => {
// 	console.log('In another middleware!');
// 	res.send('<h1>Hello from Express</h1>');
// });

app.get('/courses', (req, res) =>{
	console.log('Course List');
	res.send("Course List");
})

app.use('/', (req, res, next) => {
	console.log('There is a new request');
	next();
});
app.use('/courses', (req, res, next) => {
	console.log('middleware!');
	res.send('middleware');
});



app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});

