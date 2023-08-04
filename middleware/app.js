const express = require('express');
const fs = require('fs');


const host = 'localhost';
const port = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) =>{
	let html = `

	<form action="signup" method="post">
	First Name <input name="fname"> <br/>
	Last Name <input name="lname"> <br/>
	<button type="submit">submit</button>
	</form>

	`;
	res.send(html);
});

app.post('/signup', (req, res, next) => {
	if (req.body.fname && req.body.lname) {
		fs.writeFileSync('database.txt', "Sam=Tumd");
		let data = fs.readFileSync('database.txt');
		data += ', ' + req.body.fname + '='+ req.body.lname;
		fs.writeFileSync('database.txt', data);
		res.send('saved successfully!');
		
	}else {
		let html = `
		<form action='/signup' method="post">
		   First Name <input name="fname"> <br />
		   Last Name <input name="lname"> <br />
			 <button>submit</button>
		<p> Firstname and lastname are required</p>
		</form>
		`;
		res.send(html);
		res.redirect('/');
	}
})




app.listen( port, host, () =>{
	console.log(`Server is running on http://${host}:${port}`);
})
