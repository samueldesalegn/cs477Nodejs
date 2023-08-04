// const getName = require('./b.js');

// // const ob1 = new Person("Emma");
// console.log(getName)
// getName.getName()

const fs = require('fs');
const path = require('path');
// console.log(__dirname); 

// //Return the directory part of a path:
// console.log(path.dirname('Buffer'));

// const name = 'joe';
// console.log(path.join('users', name, 'notes.txt'));


// const greet = fs.readFileSync(path.join(__dirname, 'hello.txt'), 'utf8');
// console.log(greet);


const greet2 = fs.readFileSync(path.join(__dirname, 'hello.txt'), 'utf8',(err, data) => data);
// console.log('Done!');
// console.log(greet2);

fs.writeFile('students.txt', 'Hello World!', (err) => {
	if (err) throw err;
	console.log('Done');
	});



