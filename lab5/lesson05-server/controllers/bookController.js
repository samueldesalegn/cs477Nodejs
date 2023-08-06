const Books = require('../models/book');


exports.getBooks = (req, res, next) => {
	res.status(200).json(Books.fetchAll());
}


exports.getBookById = (req, res, next) => {
	res.status(200).json(Books.findById(req.params.Id));
}


exports.save = (req, res, next) => {
	const bks = req.body;
	const savedBook = new Books(bks.id, bks.title, bks.ISBN, bks.publishedDate, bks.author).save();
	res.status(201).json(savedBook);
}

exports.update = (req, res, next) => {
	const bks = req.body;
	const updatedBook = new Books(bks.id, bks.title, bks.ISBN, bks.publishedDate, bks.author).update();
	res.status(200).json(updatedBook);
}


exports.deleteById = (req, res, next) => {
	Books.deleteById(req.params.Id);
	res.status(200).end();
}