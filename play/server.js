const http = require("http");
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const listener = function (req, res) {
    fs.createReadStream('dog.jpg').pipe(res);
};

const server = http.createServer(listener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});