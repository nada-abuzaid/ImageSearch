const http = require('http');
const router = require('./router');

const server = http.createServer(router);
// eslint-disable-next-line no-unused-vars
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
