const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const url = path.join('resources', 'static', 'database', 'database.txt')


const database = fs.readFileSync(url, 'utf-8');
console.log(database);


// app.use('/resources', express.static(path.join(__dirname, 'public', 'assets')));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'index.html'))
});

// app.get('/users', (req, res, next) => {
// 	console.log(1);
// 	next();
// },(req, res, next) =>{
// 	console.log(2);
// 	next();
// },
// (req, res, next) =>{
// 	console.log(3);
// 	next('something');
// });


// app.post('/users', (req, res, next) => {
// 	console.log(4);
// 	res.status(200).send("Success 1!");
// });

// app.get('/users', (req, res, next) => {
// 	console.log(5);
// 	res.status(200).send("Success 2!");
// });

// // app.get((req, res, next) => {
// // 	console.log(5);
// // 	res.status(200).send("Success 2!")
// // });

// app.use((err, req, res, next) => {
// 	console.log(6);
// 	res.status(500).send("Try later!")
// });



app.listen(3000)
