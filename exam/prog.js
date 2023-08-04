const express = require('express');

const fs = require('fs');

 

let data = fs.readFileSync('database.txt').toString();

let arr = data.split(',');
const set = new Set(arr);

console.log(set)

 

const host = 'localhost';

const port = process.env.PORT || 5000;

 

const app = express();

app.use(express.urlencoded({ extended: true }));

 

app.get("/", (req, res) => {

  res.send(`

    <h1>Hello From Node.js</h1>

    <form action="login" method="POST">

      Username: <input name="username"> <br />

      Password: <input name="pwd"> <br>

      <button>submit</button>

    </form>

  `);

});

 

app.post('/login', (req, res, next) => {

  console.log(`${req.body.username}=${req.body.pwd}`);
	if (!req.body.username && !req.body.pwd) {
		res.send(`

      <form action="login" method="POST">

        Username:<input name="username"> <br />

        Password: <input name="pwd"> <br />

        <button>submit</button>

        <p>Please enter Username and password</p>

      </form>

    `);
		
	}

  if (set.has(`${req.body.username}=${req.body.pwd}`)) {

    res.send(`Welcome ${req.body.username}`);

  } else {

    res.send(`

      <form action="login" method="POST">

        Username:<input name="username"> <br />

        Password:<input name="pwd"> <br>

        <button>submit</button>

        <p>Incorrect Username or password</p>

      </form>

    `);

  }

});

 
app.use((req, res) => { res.status(404).send('Page NOT Found')});
app.listen(port, host, () => {

  console.log(`Server is running on http://${host}:${port}`);

});

