const person = {
	fname: "Tina",
	lname: 'Xing'
};

const prof = Object.create(person);
console.log(prof);
console.log(prof.fname);
console.log(prof);