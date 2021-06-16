import React, { useContext, useEffect, useState } from 'react'
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
             <Header name={ctx.roomno} color='dark' bgcolor='info' />
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
                   
                    <button className={['btn btn-success'].join(' ')} type="button">SEND</button>
                    
                   
                    </Col>
              </Row>
          
              </Col>

           </Row>
            </Col>

            <Col   md={3} >
             <Sidebar messages={messages} />
         </Col>
      
        </Row>
        </Container>
    )
}

export default Chat
