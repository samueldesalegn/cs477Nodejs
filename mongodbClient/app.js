const express = require('express');
const cors = require('cors')

const { MongoClient, ObjectId } = require("mongodb");


// Create Express app

const app = express();
// app.use(cors("http://localhost:3000/"));
// Connect to MongoDB

const client = new MongoClient("mongodb://127.0.0.1:27017");

let db = null;

async function main() {
  await client.connect();
  db = client.db("cs415MongProject");

}
main()
  .then(() => console.log("DB is connected....."))
  .catch((error) => console.log(error))
	.finally(() => client.close());





	// app.listen(3000, () => {

	// 	console.log("Server listening @3000");
	
	// });