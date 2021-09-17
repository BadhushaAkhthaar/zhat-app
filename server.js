const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const path = require('path')

const port = 3300 || process.env.PORT
let app = new express();

let server = http.createServer(app);
let io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("New user joined");
    socket.on('mainmessage',()=>{
        io.emit("newmessage",'Hello User');
    })
})
server.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);
});