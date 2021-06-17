import React from 'react'
import {Navbar,NavDropdown,Button,NavLink} from 'react-bootstrap';
import { useHistory } from 'react-router';

import UserContext from '../Context/usercontext'

const Header = ({color,name,bgcolor,users,active}) => {
  let history = useHistory();
  let leave = ()=>{
    history.push('/');
  }
    
    return (
      <Navbar className='d-flex justify-content-between'  bg={`${bgcolor}`} variant={`${color}`}>
         <Navbar.Brand >{name}</Navbar.Brand>
    
        
      
         {
           users?(
            <div className='d-block d-md-none '>
            <NavDropdown   title="In the Room" id="basic-nav-dropdown">
              {
                 users.map((user,i)=>{
 
                   return(
                     <NavDropdown.Item  key={i}>{user.name}</NavDropdown.Item>
                   )
                  })
              }
            
           
             </NavDropdown>
            </div>
           ):null
         }

         {
           active?(
            
              <Button  variant="dark" onClick={leave} >Leave</Button>
           
           
           ):null
         }
        
     
    </Navbar>
    )
}

export default Header
