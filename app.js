
'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 8000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server, {
  cors: {
    origin: "https://ma-petite-app.herokuapp.com/",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', function(data) {
      io.emit('MESSAGE', data)
      console.log(data)
  });
});