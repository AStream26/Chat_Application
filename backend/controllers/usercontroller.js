let users = [];

module.exports.adduser = ({id,name,room})=>{
    
   name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
   
    const existinguser = users.find(user=>user.room === room && user.name === name);
    if(existinguser){
        return { error:'Username had already taken 😵😵'}
    }

    const user = {id,name,room};
    users.push(user);
   console.log(user);
    return {user,error:null};
}

module.exports.Getuser = (id)=>users.find(user=>user.id === id);

module.exports.Removeuser = (id)=>{
    
    const index = users.findIndex(user=>user.id === id);
    if(index!==-1){
   return users.splice(index,1)[0];
    }
}

module.exports.getUsersInRoom = (room)=>users.filter(user=>user.room === room);