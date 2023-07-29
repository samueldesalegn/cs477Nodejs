class Person {
	constructor(name="John"){
		this.name = name;
	}
	getName(){
		console.log(this.name);
	}
}

let person = new Person('Bella')
module.exports = person;
console.log(person);