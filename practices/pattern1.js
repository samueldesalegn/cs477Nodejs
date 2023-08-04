// // Pattern1 - pattern1.js
// module.exports = function () {
// 	console.log('Josh Edward');
// 	};


// class Person {
// 	constructor(name='Josh'){
// 		this.name = name;

// 	}
// 	getName() {
// 		console.log(this.name);
// 	}
// }

// module.exports= new Person("Bella");



// function getFullName(fname, lname) {
// 	return `${fname} ${lname}`;
// }

// exports = {
// 	getFullName
// };
// module.exports.fname = "John";
// // console.log(fname);
// module.exports = exports;

// exports.printName = function(fname, lname){
// 	return `${fname} ${lname}`;
// }

// console.log(module.exports);

class Person {
	constructor(name="John") {
		this.name = name;
	}

	getName(){
		console.log(this.name)
	}
}

exports = new Person("Bella");
	