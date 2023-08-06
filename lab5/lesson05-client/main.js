window.onload = function() {
	addBook('http://localhost:5000/books', "POST", {
		id: 3,
		title: "RDBMS One",
		ISBN: "20403",
		publishedDate: "2020-02-05",
		author: "Desalegn"
	} );
	deleteBook(1);
	getAllBooks();
}

let books = [];
async function getAllBooks(){
	const res = await fetch('http://localhost:5000/books');
	books = await res.json();

	let html = `
	<table>
   <tr>
    <th>Id</th>
    <th>Title</th>
    <th>ISBN</th>
    <th>PublishedDate</th>
    <th>Author</th>
  </tr>
	`;

	books.forEach(elem => {
		html += `
		<tr>
    <td>${elem.id}</td>
    <td>${elem.title}</td>
    <td>${elem.ISBN}</td>
    <td>${elem.publishedDate}</td>
    <td>${elem.author}</td>
  </tr>
		`
	});
	html += `</table>`;

	document.getElementById('books').innerHTML = html;
}

async function addBook(url, type, elem) {
  const res = await fetch(url, {
    method: type,
    body: JSON.stringify(elem),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const data = await res.json(); 
	console.log(data);
	if (type === "POST") {
		books.push(data);
		console.log("Book Added Successfully");
		
	}
	if (type === "PUT") {
		const index = books.findIndex(p => p.id === data.id);
			books.splice(index, 1, data);
		
		
		console.log(books);
	}
	// if (type === "DELETE") {
	// 	const index = books.findIndex(p => p.id === data.id);
	// 	books = books.filter(p => p.id !== Id);
		
		
	// 	console.log(books);
	// }

	

};


async function deleteBook(id){
	
	const res = await fetch(`http://localhost:5000/books`);
	books = await res.json();
	console.log(books);
	
	books = books.filter(p => p.id !== id);
	console.log(books)
	console.log("Deleted Successfully!")
}







