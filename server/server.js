const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// Express usa funciona de http
const app = express();
// Por lotanto se puede enviar app como argument y asi montar un server
// con la config de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = (input/output) = This is the communication with the backend
module.exports.io = socketIO(server);
require('./sockets/socket');

// Need to change the name of app for server in the listen
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Server running on port: ${ port }`);
});