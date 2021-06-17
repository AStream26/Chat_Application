import React from 'react';

const UserContext = React.createContext({
    username:'',
    roomno:'',
    setContext : (name,room)=>{}
})

export default UserContext;