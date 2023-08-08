const Book = require('../models/book');


exports.fetchAll = async (req, res, next) => {
    const books = await Book.find();
    res.status(200).json(books);
};

exports.fetchById = async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
}

exports.save = async (req, res, next) => {
    const savedBook = await new Book(req.body).save();
    res.status(201).json(savedBook);
}

exports.update = async (req, res, next) => {
    const updated = await Book.updateOne({_id: req.params.id}, req.body);
    res.json(updated);
}

exports.deleteById = async (req, res, next) => {
	const result = await Book.findByIdAndDelete(req.params.id);
	res.json(result);
}












