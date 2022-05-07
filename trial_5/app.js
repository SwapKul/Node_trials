// creating a server
const http = require('http');
// importing routes.js from local folder
const routes = require('./routes');
// passes the function from routes
const server = http.createServer(routes);
// starts the server on port:3000
server.listen(3000);