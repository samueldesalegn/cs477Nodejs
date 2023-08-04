class Person {
	constructor(name="John") {
		this.name = name;
	}

	getName(){
		console.log(this.name)
	}
}

module.exports.person = new Person("Edward");