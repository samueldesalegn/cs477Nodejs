window.onload = function() {
	fetchProducts();
	document.getElementById('submit').onclick = savedBook;
}

async function fetchProducts(){
	const response = await fetch('http://localhost:5000/books');
	const data = await response.json();

	let html = `
	<table id="product-table">
	<tr>
		<th>Id</th>
		<th>Title</th>
		<th>ISBN</th>
		<th>Published Date</th>
		<th>Author</th>
		<th>Actions</th>
	</tr>
	`;

	data.forEach(book => {
			html += `
					<tr id="${book._id}">
							<td>${book._id}</td>
							<td id="${book.title}">${book.title}</td>
							<td id="${book.ISBN}">${book.ISBN}</td>
							<td id="${book.publishedDate}">${book.publishedDate}</td>
							<td id="${book.author}">${book.author}</td>
							<td>
									<button onclick="editById('${book._id}');">Edit</button>
									<button onclick="deleteById('${book._id}');">Delete</button>
							</td>
			</tr>
			`
	});
	html += '</table>';
	document.getElementById('books').innerHTML = html;
}

async function savedBook(evt){
	evt.preventDefault();
	const response = await fetch('http://localhost:5000/books', {
			method: 'POST',
			body: JSON.stringify({
					title,
					ISBN,
					publishedDate,
					author
			}),
			headers: {
					'Content-Type': 'application/json'
			}
	});
	const book = await response.json();
	console.log(book);
	const html = `
			<tr>
			<td>${book._id}</td>
			<td>${book.title}</td>
			<td>${book.ISBN}</td>
			<td>${book.publishedDate}</td>
			<td>${book.author}</td>
	</tr>
	`;

	document.getElementById('product-table').innerHTML += html;
	document.getElementById('product-add-form').reset();
}


async function deleteById(id){
	const response = await fetch(`http://localhost:5000/books/${id}`, {
			method: 'DELETE'
	});
	// const data = await response.json();
	document.getElementById(id).remove();
}

async function editById(id){
	document.getElementById('product-add-form').style.display = 'none';
	const response = await fetch(`http://localhost:5000/books/${id}`);
	const book = await response.json();


	let html = `
			<div id="product-edit-form">
					<h1>Edit Product</h1>
					<p>Title: <input id="title2" name="title" value="${book.title}" /></p>
					<p>ISBN: <input id="isbn2" name="ISBN" value="${book.ISBN}" /></p>
					<p>Published Date: <input id="publishedDate2" name="publishedDate" value="${book.publishedDate}" /></p>
					<p>Author: <input id="author2" name="${book.author}"</p>
					<button id="submit" onclick="updateProd('${book._id}')">Submit</button>
			</div> 
	`;
	document.getElementById('edit').innerHTML =  html;
}

async function updateProd(id){
	console.log('inside update' + id);
	// console.log(document.getElementById('title2').value);
	const title = document.getElementById('title2').value;
	const ISBN = document.getElementById('isbn2').value;
	const publishedDate = document.getElementById('publishedDate2').value;
	const author = document.getElementById('author2').value;
	await fetch(`http://localhost:5000/books/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
					title,
					ISBN,
					publishedDate,
					author 
			}),
			headers: {
					'Content-Type': 'application/json'
			}
	});
	// await response.json();
	document.getElementById(`${title}`).innerHTML = title;
	document.getElementById(`${ISBN}`).innerHTML = ISBN;
	document.getElementById(`${publishedDate}`).innerHTML = publishedDate;
	document.getElementById(`${author}`).innerHTML = author;

	document.getElementById('product-add-form').style.display = 'block';
	document.getElementById('product-edit-form').style.display = 'none';
}
