const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gzip = zlib.createGzip();

// const readable = fs.createReadStream(path.join(__dirname, 'dog.jpg'));

// const writable = fs.createWriteStream(path.join(__dirname, 'destinationFile.jpg'));
// // readable.on('data', chunk => writable.write(chunk));
// readable.pipe(writable);


const readable = fs.createReadStream(path.join(__dirname, 'greet.txt'));

const writable = fs.createWriteStream(path.join(__dirname, 'tinagreet.txt.gz'));
readable.pipe(gzip).pipe(writable);