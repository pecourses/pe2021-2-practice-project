const http = require('http');
const app = require('./app');
const controller = require('./socketInit');
require('./dbMongo/mongoose');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);

controller.createConnection(server);
