const fs = require('fs');
const path = require('path');

const database = fs.readFileSync(path.join(__dirname, '..', '..', 'resources', 'a.txt'), 'utf8');
console.log(database);