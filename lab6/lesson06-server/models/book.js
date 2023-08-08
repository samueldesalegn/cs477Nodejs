const { getDb } = require('../utils/database');
const { ObjectId } = require('mongodb')


class Books {
	constructor(title, ISBN, publishedDate, author) {
		
		this.title = title;
		this.ISBN = ISBN;
		this.publishedDate = publishedDate;
		this.author = author;
	}
	save(){
		const db = getDb();
		const collection = db.collection('books');
		return collection.insertOne(this);
	}

	update(id){
		const db = getDb();
		const collection = db.collection('books');
		return collection.updateOne({_id: new ObjectId(id)}, {$set: {title: this.title, isbn: this.ISBN, pubshlishedDate: this.pubshlishedDate, author: this.author}});
	}
	

	static getAll(){
		const db = getDb();
    const collection = db.collection('books');
		return collection.find().toArray();
  }

	static findById(id) {
		const db = getDb();
    const collection = db.collection('books');
		return collection.findOne({_id: new ObjectId(id)});
	}


  static deleteById(id) {
		const db = getDb();
		const collection = db.collection('books');
		return collection.deleteOne({_id: new ObjectId(id)});
  }

	static deleteById(id) {
		const db = getDb();
		const collection = db.collection('books');
		return collection.deleteOne({_id: new ObjectId(id)});
}
	
		

}

module.exports = Books;