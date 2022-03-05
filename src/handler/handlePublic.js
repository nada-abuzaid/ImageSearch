const path = require('path');
const fs = require('fs');
const serverError = require('./serverError');

const handlePublic = (url, response, state) => {
  const filePath = path.join(__dirname, '..', '..', 'public', url);
  const extention = path.extname(url);

  const contentType = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    '.json': 'application/json',
    '.ico': 'text/plain',
  };

  fs.readFile(filePath, (error, file) => {
    if (error) {
      serverError(response);
    } else {
      response.writeHead(state || 200, { 'Content-Type': contentType[extention] });
      response.end(file);
    }
  });
};

module.exports = handlePublic;
