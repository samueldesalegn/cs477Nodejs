class Person {
	constructor(name="John") {
		this.name = name;
	}

	getName(){
		console.log(this.name)
	}
}

exports.person = new Person("Bella");
// console.log(exports);