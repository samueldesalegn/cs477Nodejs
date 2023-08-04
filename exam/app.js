// const fs = require('fs');

// let data = fs.readFileSync('database.txt').toString();

// let arr = data.split(',');
// // console.log(arr);


const express = require('express');
const app = express();


app.get('/users', (req, res, next) => {
  console. log('1');
	next();
},
(req, res, next) => {
    console. log('2');
    next('route');
},

(req, res, next) => { 
  console. log('3');
	next('something');      

});

app.post('/users', (req, res, next)=> {
	console.log(4);
	res.status(200).send ('Success 1');

})

app.get('/users', function (req, res, next) {
console.log(5);
res.status(200).send ('Success 2');
})

// app.get('/courses', (reg, res)=>{

// console.log('Course List');

// res. send( 'Course List');

// });

console.log(333)

 

app.listen(5000);

