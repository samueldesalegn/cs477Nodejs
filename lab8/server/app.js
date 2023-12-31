const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/userRoute');
const cors = require('cors');


//Instantiation
const app = express();

//Configuration
const host = 'localhost';
const port = 5000;


app.use(cors());
app.use(express.json());


app.use('/users', userRouter);

// app.use(authRouter);


// Middlewares
app.use(authRouter);
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





