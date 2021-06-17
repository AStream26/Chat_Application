import React from 'react'
import classes from './sidebar.module.css';
import {ListGroup,ListGroupItem} from 'react-bootstrap'
const Sidebar = ({users}) => {
   // console.log(users);
    return (

        <div className={['m-2',classes.sidebar].join(' ')}>
         
         <nav className="navbar navbar-dark bg-dark rounded">
        <div className="container-fluid">
            <span  className="navbar-brand mb-0 p">In the Room  </span>
        </div>
        </nav>
        <ListGroup>
            {
               users &&  users.map((user,i)=>{

                return(
                  <ListGroupItem key={`${i}==1`} style={{textAlign:'center'}}>{user.name}</ListGroupItem>
                )
               })
            }
           
           
          


        </ListGroup>
        </div>
    )
}

export default Sidebar
