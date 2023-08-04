// const fs = require('fs');

// console.log('first');
// fs.readFile('hello.txt', () => console.log('second'));
// console.log('third');


// new Promise(resolve => resolve('Hi'))
// .then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));


// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
// console.log("this is setTimeout 2");
// process.nextTick(() =>
// console.log("this is inner nextTick inside setTimeout")
// );
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
// new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
// new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 2"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => console.log("this is process.nextTick 2"));




// const fs = require('fs');
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// fs.readFile('hello.txt', () => console.log('this is readFile 1'));
// // new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
// // process.nextTick(() => console.log("this is process.nextTick 1"));



// fs.readFile('hello.txt', () => console.log('this is readFile 1'));
// new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));
// // for (let i = 0; i < 2000000000; i++) {}



// fs.readFile('hello.txt', () => {
// 	console.log("this is readFile 1");
// 	setImmediate(() => console.log("this is setImmediate 1"));
// 	process.nextTick(() =>
// 	console.log("this is inner process.nextTick inside readFile")
// 	);
// 	Promise.resolve().then(() =>
// 	console.log("this is inner Promise.resolve inside readFile")
// 	);
// 	});
// 	process.nextTick(() => console.log("this is process.nextTick 1"));
// 	Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// 	setTimeout(() => console.log("this is setTimeout 1"), 0);
// 	for (let i = 0; i < 2000000000; i++) {}



// const readableStream = fs.createReadStream('hello.txt');
// readableStream.close();
// readableStream.on("close", () => {
// console.log("this is from readableStream close event callback");
// });
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));


// let sayHi = function() {
// 	console.log("Hi")
// }
// module.exports = sayHi;
// console.log("Hello from Tele");

// class Person {
// 	constructor(name = 'Josh Edward') {
// 	this.name = name;
// 	}
// 	getName() {
// 	console.log(this.name);
// 	}
// 	}
// 	module.exports = Person;


const names = "Josh";
function getName(){
	console.log(names);
}

module.exports = {
	getName:getName
}
	