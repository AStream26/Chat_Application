import React from 'react'
import UserContext from '../Context/usercontext'

const Header = ({color,name,bgcolor}) => {
    
    return (
  <nav className={`navbar navbar-expand-lg navbar-${color} bg-${bgcolor}`}>
  <div className="container-fluid">
   
     <span className='navbar-brand'>{name}</span>
  
  

   
  </div>
</nav>
    )
}

export default Header
