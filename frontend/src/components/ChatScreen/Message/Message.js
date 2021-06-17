import React, { useEffect, useRef } from 'react'
import {Container,Row} from 'react-bootstrap'

import classes from './Message.module.css'
import Messageout from './messageout'
const Message = ({messages,name}) => {

  const messagesEndRef = useRef(null)

const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}


useEffect(() => {
    scrollToBottom()
  }, [messages]);

   

  
    return (
            <div   >
                        <Container className={[classes.message,'p-2'].join(' ')}  >
    
      {
           messages.map((message,i)=>{
            return (
                <div key={i}>
                <Messageout  message={message} name={name} />
                </div>
            )
        })
      }
       <div ref={messagesEndRef} />
        </Container>
        </div>

    )
}

export default Message
