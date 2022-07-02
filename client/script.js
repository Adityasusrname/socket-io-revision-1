const socket =io("http://localhost:3232")

const messageBox=document.getElementById('messageBox')
const roomBox=document.getElementById('roomBox')
const joinRoom=document.getElementById('joinRoom')
const sendButton=document.getElementById('sendButton')
const messagesInnerContainer=document.getElementById('messagesInnerContainer')


let room=""

joinRoom.onclick=function(){

    room=roomBox.value.toString()

    if(room!=""){
        socket.emit("join room",room)
        console.log(`Room->${room}`)
    }

}

sendButton.onclick=function(){

       let message=messageBox.value.toString()

       let msgH1=document.createElement('h1')
       let msgText=document.createTextNode(message)
       msgH1.appendChild(msgText)
       messagesInnerContainer.appendChild(msgH1)
       socket.emit("message",message,room)
       console.log(message+" "+room)
}

socket.emit("hello from client")

socket.on("message from server",(message)=>{

    let MESSAGE=message

    let msgH1=document.createElement('h2')
    let msgText=document.createTextNode(MESSAGE)
    msgH1.appendChild(msgText)
    messagesInnerContainer.appendChild(msgH1)
       
})

socket.on("hello from server",()=>{
    console.log("Hello from server recieved!")
})