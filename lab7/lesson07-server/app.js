const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book');
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
// app.use('/', bookRouter);
	

//startup
mongoose.connect('mongodb://127.0.0.1:27017/mongooseProject')
   .then(() => {
		app.listen(port, host, () => { console.log(`Server is running on http://${host}:${port}/books`) });
   });

app.use((err, req, res, next) => {
   console.log(err.message);
})





