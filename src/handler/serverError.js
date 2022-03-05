const serverError = (response) => {
  response.writeHead(500);
  response.end('SERVER ERROR');
};

module.exports = serverError;
