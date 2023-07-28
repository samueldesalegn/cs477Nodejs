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
fs.writeFile('students.txt', 'Hello World!', (err) => {
	if (err) throw err;
	console.log('Done');
	});