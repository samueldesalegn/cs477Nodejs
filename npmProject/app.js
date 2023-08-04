const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res, next)=> {
	

});

app.get('/users', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'users.html'));
}); 


app.get('/products', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'products.html'));
}); 


	app.use((req, res) => {
		//  res.status(404).send('Page NOT Found');
		 res.sendFile(path.join(__dirname, 'views', '404.html'))
		
		});

console.log(__dirname);

app.listen(5000)



