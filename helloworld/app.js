// const person = require('./mypackage');
// person.person.getName();

console.log("Code Starts");
new Promise(resolve => resolve('Hi'))

.then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));

new Promise( (foo, bar) => {
	console.log('Promise started');
	bar("Promise Result");
	console.log("Promise Ended")

}).then(console.log);
console.log("code ends");
