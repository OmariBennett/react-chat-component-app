const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./router.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 5000;

io.on('connection', (socket) => {
	// console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	console.log('hola world'); // x8WIv7-mJelg7on_ALbx

	socket.on('disconnect', () => console.log('disconnect...'));
});

app.use(router); // midddleware that runs on localhost:5000
server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
