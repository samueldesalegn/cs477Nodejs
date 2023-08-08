const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ISBN: String,
    publishedDate: String,
    author: String
		
});

//Product => product + 's' => products
module.exports = mongoose.model('Book', bookSchema);