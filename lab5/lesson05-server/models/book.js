let books = [
	{id: 1, title: "NodeJs", ISBN: "20403", publishedDate: '2020-02-05', author: "Samuel"},
	{id: 2, title: "Algorithm", ISBN: "603037", publishedDate: '2010-02-05', author: "Tumdedo"}

];

class Books {
	constructor(id, title, ISBN, publishedDate, author) {
		this.id = id;
		this.title = title;
		this.ISBN = ISBN;
		this.publishedDate = publishedDate;
		this.author = author;
	}
	save() {
		// this.id = Math.random().toString();
		books.push(this);
		return this;
	}
	update() {
		const index = books.findIndex(p => p.id === this.id);
		if (index > -1) {
			books.splice(index, 1, this);
			return this;
		} else {
			throw new Error('NOT Found');
		}
	}

	static fetchAll() {
		return books;
	}

	static findById(Id) {
		const index = books.findIndex(p => p.id === Id);
		if (index > -1) {
			return books[index];
		} else {
			throw new Error('NOT Found');
		}
	}

	static deleteById(Id) {
		const index = books.findIndex(p => p.id === Id);
		if (index > -1) {
			books = books.filter(p => p.id !== Id);
		} else {
			throw new Error('NOT Found');
		}
	}
		

}

module.exports = Books;