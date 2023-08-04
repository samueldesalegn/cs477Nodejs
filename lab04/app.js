const express = require('express');


const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

const host = 'localhost';
const port = process.env.PORT || 3000;

// //  “/”, “/users” and “/products”



app.get("/", (req, res)=> {
	console.log("Here!");
	res.render('index', {text: "World"});
});

const userRouter = require('./routes/users');
app.use(userRouter);





app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});