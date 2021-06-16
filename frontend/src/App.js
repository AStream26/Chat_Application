import React, { useState } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/HomeScreen/Home';
import Chat from './components/ChatScreen/Chat';
import UserContext from './Context/usercontext';
import {Container} from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/Footer';

const App = () => {
    const [username,setusername] = useState('');
    const [room,setroom] = useState('');

        let set = (username,roomno)=>{
        setroom(roomno);
        setusername(username);
    }

    return (
      <UserContext.Provider value={{
          username:username,
          roomno:room,
          setContext:set
      }}>
         <Header name='MyChat' color='dark' bgcolor='primary' />
        <main style={{height:'84vh'}}>
        
        <Route path='/' exact component={Home}/>
        <Route path='/chat' exact component={Chat} />
       
        </main>
        <Footer />
      
         
      </UserContext.Provider>
    )
}

export default App
