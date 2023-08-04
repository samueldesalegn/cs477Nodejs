const express = require('express');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');

const path = require('path');
const app = express();

const host = 'localhost';

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function(err, req, res, next) {
    res.status(500).send('Something went wrong!');
});


app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});