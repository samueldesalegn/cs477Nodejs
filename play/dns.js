const dns = require('dns');

dns.lookup('www.miu.edu', (err, value) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(value);
	});