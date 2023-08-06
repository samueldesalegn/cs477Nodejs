const express = require('express');
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
app.use('/', bookRouter);
	




app.use((req, res, next) => {
res.status(404).json({ error: req.url + ' API not supported!' });
});
app.use((err, req, res, next) => {
if (err.message === 'NOT Found') {
res.status(404).json({ error: err.message });
} else {
res.status(500).json({ error: 'Something is wrong! Try later' });
}
});


// Startup
app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}/books`);
});