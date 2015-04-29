module.exports = function(socket) {

  // login event
  socket.mcbot.on('login', function() {
    socket.emit('buffer:success', 'Successfully logged in as ' + socket.mcbot.username + ' with entity id ' + socket.mcbot.entity.id);
    socket.emit('bot:connect', {
      host: socket.connectionParams.hostname,
      port: socket.connectionParams.port,
      username: socket.connectionParams.username
    });
  });

};
