const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./routes/studentRouter');
// const authRouter = require('./routes/auth');
const cors = require('cors');


//Instantiation
const app = express();

//Configuration
const host = 'localhost';
const port = 5000;


app.use(cors());
app.use(express.json());


// Middlewares
// app.use(authRouter);
app.use('/students', studentRouter);

	

//startup
mongoose.connect('mongodb://127.0.0.1:27017/courseByStudent')
   .then(() => {
		app.listen(port, host, () => { console.log(`Server is running on http://${host}:${port}/students`) });
   });

app.use((err, req, res, next) => {
   console.log(err.message);
})