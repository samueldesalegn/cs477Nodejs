const Books = require('../models/book');




exports.getBooks = async (req, res, next) => {
	const books = await Books.getAll();
	res.status(200).json(books);
}

exports.save = (req, res, next) => {
	const bks = req.body;
	const book = new Books(bks.title, bks.ISBN, bks.publishedDate, bks.author).save();
	res.status(201).json(book);
}

exports.getBookById = async (req, res, next) => {
	res.status(200).json(await Books.findById(req.params.id));
}


exports.update = (req, res, next) => {
	// const bks = req.body;
	const updated = Books.update();
	res.status(200).json(updated);
}

exports.update = async (req, res, next) => {
	const bks = req.body;
	await new Books(bks.title, bks.ISBN, bks.publishedDate, bks.author).update(req.params.id);
	res.status(204).end();
}

exports.deleteById = async (req, res, next) => {
	await Books.deleteById(req.params.id);
	res.status(204).end();
}


