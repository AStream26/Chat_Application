import React, { useEffect, useRef } from 'react'
import {Container,Row} from 'react-bootstrap'

import classes from './Message.module.css'
import Messageout from './messageout'
const Message = ({messages,name}) => {

    const divRef = useRef(null);

    useEffect(() => {
      divRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    });
    return (
            <div  ref={divRef} >
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
   
        </Container>
        </div>

    )
}

export default Message
