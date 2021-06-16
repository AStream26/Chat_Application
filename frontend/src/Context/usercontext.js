import React from 'react';

const UserContext = React.createContext({
    username:'Avi',
    roomno:'1234',
    setContext : (name,room)=>{}
})

export default UserContext;