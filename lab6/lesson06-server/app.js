const express = require('express');
const bookRouter = require('./routes/bookRouter');
const { createDB } = require('./utils/database');
const cors = require('cors');


//Instantiation
const app = express();

//Configuration
const host = 'localhost';
const port = 5000;


app.use(cors());

app.use(express.json());

// Middlewares
app.use('/books', bookRouter);


// Startup
createDB(() =>{
  console.log("DB connected!")
	app.listen(port, host, () => {
		console.log(`Server is running on http://${host}:${port}/books`);
	});
});



