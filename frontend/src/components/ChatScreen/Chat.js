import React, { useContext, useEffect, useState,useRef } from 'react'
import { useHistory } from 'react-router';
import io from 'socket.io-client';
import UserContext from '../../Context/usercontext';
import {Row,Col,Container,Button} from 'react-bootstrap'
import Sidebar from './Sidebar/sidebar';
import classes from './chat.module.css';
import Header from '../header';
import Message from './Message/Message';
let socket;
const Chat = () => {
    let history = useHistory();
let ctx = useContext(UserContext);
let ENDPOINT = 'localhost:4000';

const[messages,setMessages]  = useState([]);
const[message,setMessage]  = useState('');
const[users,setusers] = useState([]);
   


    useEffect(()=>{
     if(!ctx?.username.trim() || !ctx?.roomno.trim())
       history.push('/');

      socket = io(ENDPOINT, { transports: ['websocket'] });
    socket.emit('join',{name:ctx.username,room:ctx.roomno},()=>{
       
    });

    return ()=>{
        socket.disconnect()

        socket.off();
    }

    },[ENDPOINT])

    useEffect(()=>{
    
        socket.on('message',(message)=>{
         setMessages([...messages,message]);
         setusers(message.InRoom);
        })

    },[messages])

    let sendMessage = (e)=>{
        e.preventDefault();

        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }

    }
  // console.log(message,messages);

    return (
        <Container>
        <Row>
        <Col className='mt-2'>
           <Row>
           <Col xs={12}  >
             <Header name={ctx.roomno} active={true} users={users} color='dark' bgcolor='dark' />
            </Col>

               <Col xs={12} >
                <Message  messages={messages} name={ctx.username}/>
               
               </Col>
              <Col xs={12} className={[' '].join(' ')}>
         
            <Row>
                  <Col xs={8} md={10}  ><input type='text' value={message} placeholder='Type a message ....'
                    onChange={(e)=>setMessage(e.target.value)}
                    onKeyPress={(e)=>e.key === 'Enter'?sendMessage(e):null}
                    />
                    </Col>
                    <Col xs={2} >
                   
                    <button style={{
                        width:'6em',
                        height:'3em',
                        backgroundColor:'greenyellow'
                    }} type="button">SEND</button>
                    
                   
                    </Col>
              </Row>
          
              </Col>

           </Row>
            </Col>

            <Col className='d-none d-md-block'  md={3} >
             <Sidebar users={users} />
         </Col>
      
        </Row>
        </Container>
    )
}

export default Chat
