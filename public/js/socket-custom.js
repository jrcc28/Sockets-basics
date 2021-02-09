
    var socket = io();
    // on = listen 
    socket.on('connect', function(){
        console.log('Connected to Server');
    });

    socket.on('disconnect', function(){
        console.log('Connection lost');
    });

    // emit = send
    socket.emit('sendMessage', {
        user: 'Jose',
        message: 'Hello'
    }, function(resp) {
        console.log(resp);
    });

    socket.on('sendMessage', function(message) {
        console.log(message);
    });

