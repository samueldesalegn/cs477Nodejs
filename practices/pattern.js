function getFullName(fname, lname){
	return `${fname} ${lname}`;
}

exports = {
	getFullName
};

exports.fname = 'John';
exports.lname = 'Smith';
module.exports = exports;
exports.printName = function(fname, lname){
	console.log(`${fname} ${lname}`);
}

console.log(module.exports);