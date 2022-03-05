const axios = require('axios');
const serverError = require('./serverError');

const handleRequestAPI = (url, res) => {
  axios
    .get(url)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(response.data));
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = handleRequestAPI;
