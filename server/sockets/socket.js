const {io} = require('../server');

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome !'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    //Listen the client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);

        // callback();

        // if( message.user){
        //     callback({
        //         resp: 'Everything is OK'
        //     });
        // }else{
        //     callback({
        //         resp: 'Everything is wrong!'
        //     });
        // }
    });
});