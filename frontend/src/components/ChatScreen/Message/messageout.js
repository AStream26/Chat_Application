import React from 'react'
import {Container,Col} from 'react-bootstrap'
import Reactemoji from 'react-emoji';

import classes from './Message.module.css'
const Messageout = ({name,message:{user,text}}) => {

    let issentbyuser = false;
    const trimname = name.trim().toLowerCase();

    if(user === trimname){
        issentbyuser = true;
    }
    return (
        issentbyuser?(
            <div className='d-flex justify-content-end'>
                 <p style={{color:'black'}}> by {user}</p>
           <div className={[classes.messagebox,' '].join(' ')}>
          <strong> <p>{Reactemoji.emojify(text)}</p></strong>
          
           </div>
           </div>
        ):(
            <>
             <div className='d-flex justify-content-start'>
           <div className={[classes.messageboxother,' '].join(' ')}>
           <strong> <p>{Reactemoji.emojify(text)}</p></strong>
          
           </div>
           <p style={{color:'black'}}> by {user}</p>
           </div>
           
            </>
        )
    )
}

export default Messageout
