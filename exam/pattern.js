function getFullName(fname, lname){
	return `${fname} ${lname}`;
}

exports = {
	getFullName
}

module.exports.fname = 'John';
module.exports.lname = 'Smith';
// module.exports = exports;
module.exports.printName = function(fname, lname){
	console.log(`${fname} ${lname}`);
};

// console.log(exports);





