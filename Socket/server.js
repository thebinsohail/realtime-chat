const io=require('socket.io')(3000);

let msg ="Welcome to the Chat App!";


io.on('connection',socket=>{
    
    console.log('New User Connected');
     
    socket.on('send-chat message',message=>{

        socket.broadcast.emit('chat-message',message);
        
    });
   
});

