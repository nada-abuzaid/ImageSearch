const path = require('path');
const fs = require('fs');
const serverError = require('./serverError');

const handleFile = (response) => {
  const filePath = path.join(__dirname, '..', 'categories.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      serverError(response);
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(data);
    }
  });
};

module.exports = handleFile;
