const express = require('express');
const fs = require('fs');




const host = 'localhost';
const port = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }))



app.get("/", (req, res) => {
	res.send(` 
 <h1>Hello From Node.js</h1>
 <form action="signup" method="POST">
 <label> First Name</label><br />
 <input name="fname"> <br />
 <label> Last Name</label><br/>
 <input name="lname"> <br>
 <button type="submit">submit</button>
 </form>`

	);

});

app.post('/signup', (req, res, next) => {
	if (req.body.fname && req.body.lname) {
		let data = fs.readFileSync('database.txt');
		data += ', ' + req.body.fname + '='+ req.body.lname;
		fs.writeFileSync('database.txt', data);
		res.send('save successfully!');

	} else {
		res.send(`
		<form action="signup" method="POST">
		<label> First Name</label><br />
		<input type="text" name="fname"> <br />
		<label> Last Name</label><br/>
		<input type="text" name="lname"> <br>
		<button type="submit">submit</button>
		<p>First Name and last name Required</p>
		</form>
		`

		);
	}

});



app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});


