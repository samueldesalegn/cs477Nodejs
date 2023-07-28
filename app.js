// // app.js
// import play from './play/index.js';
// // play.violin();
// // play.clarinet();

// // // app.js
// // const getName = require('./pattern1');
// // getName(); // Josh Edward


// const add = (a,b)=>{
// 	setTimeout(() => {
// 		for(let i=0; i<9e27; i++){}
// 		console.log(a+b);
		
// 	}, 3000);
//  }
//  console.log('start');
//  add(1,2);
//  add(2,3);
//  add(3,4);
//  console.log('end');

// puts("Enter your name: ");
// let name = gets();
// gets("Name: " + name);

// setTimeout(function () { console.log("world"); }, 2000); 
// console.log("hello");


// const fs = require('fs');
// console.log('first');
// fs.readFile('hello.txt', (err, data) => console.log(data.toString()));
// console.log('third');

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
// // setTimeout(() => console.log("this is setTimeout 1"), 0);
// // fs.readFile('hello.txt', () => console.log('this is readFile 1'));


// fs.readFile('hello.txt', () => console.log('this is readFile 1'));
// new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));


// const fs = require("fs");
// fs.readFile('hello.txt', () => {
// console.log("this is readFile 1");
// setImmediate(() => console.log("this is setImmediate 1"));
// process.nextTick(() =>
// console.log("this is inner process.nextTick inside readFile")
// );
// Promise.resolve().then(() =>
// console.log("this is inner Promise.resolve inside readFile")
// );
// });
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// for (let i = 0; i < 2000000000; i++) {}

const fs = require("fs");
const readableStream = fs.createReadStream('hello.txt');
readableStream.close();
readableStream.on("close", () => {
console.log("this is from readableStream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));