var socket = io();

socket.on('connect',()=>{
    console.log('Connection established');
})

socket.on('newmessage',(message)=>{
    console.log(`new message emitted : ${message}`);
})