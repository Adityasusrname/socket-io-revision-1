const Server=require("socket.io");
const Cors=require('cors')

const io = Server(3232,{
    cors:{
        origin:'http://127.0.0.1:5500/client/',
        credentials: true
    },
    cors:{
        origin:'http://127.0.0.1:5500',
        credentials: true
    }
});


io.on("connection",(socket)=>{
   
    socket.emit("hello from server")

    socket.on("hello from client",()=>{
        console.log("Hello from client recieved!")
    })

    socket.on("message",(message,room)=>{

               console.log(message + " " + room)

               socket.to(room).emit("message from server",message)
    })

    socket.on("join room",(room)=>{
        console.log(room)
         socket.join(room)
    })
})