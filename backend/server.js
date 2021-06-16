const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Router = require('./Routes/route');
const cors = require('cors')
const PORT = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const userControll = require('./controllers/usercontroller');

app.use(cors());
io.on('connection',(socket)=>{
    console.log(`Someone connected to the server`);

    socket.on('join',({name,room},callback)=>{
        console.log(name,room);
        const{user,error} = userControll.adduser({id:socket.id,name,room});

        if(error){
            return callback({error:error});
        }
        
        //emiting event to the frontend
        socket.emit('message',{user:'admin',text:` welcome ${user.name} to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} landed into the room 👽👽`});

        socket.join(user.room);

        callback();
    });

    //getting event from the frontend

    socket.on('sendMessage',(message,callback)=>{
        console.log(socket.id);
        const user = userControll.Getuser(socket.id);
       console.log(user);
        io.to(user.room).emit('message',{user:user.name,text:message});

        callback();
    })

    socket.on('disconnect',()=>{
       const user = userControll.Removeuser(socket.id);
       if(user){
           io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left 😕😕`})
       }
    })
})


app.use(Router);
server.listen(PORT,()=>{
    console.log('Server started');
})
