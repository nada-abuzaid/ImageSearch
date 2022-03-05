const handleFile = require('./handler/handleFile');
const handlePublic = require('./handler/handlePublic');
const handleRequestAPI = require('./handler/handleRequestAPI');

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    handlePublic('/index.html', response);
  } else if (endpoint === '/style.css' || endpoint === '/js/getData.js' || endpoint === '/js/dom.js' || endpoint === '/js/index.js') {
    handlePublic(endpoint, response);
  } else if (endpoint.includes('auto')) {
    handleFile(response);
  } else if (endpoint.includes('search')) {
    const searchValue = request.url.split('search/')[1];
    const apiUrl = `https://imsea.herokuapp.com/api/1?q=${searchValue}`;
    handleRequestAPI(apiUrl, response);
  } else if (endpoint === '/home') {
    const apiUrlPicsum = 'https://picsum.photos/v2/list';
    handleRequestAPI(apiUrlPicsum, response);
  } else {
    handlePublic('notFound.html', response, 404);
  }
};

module.exports = router;
