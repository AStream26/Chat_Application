import React, { useContext, useRef } from 'react'
import UserContext from '../../Context/usercontext'
import {Row,Col,Container} from 'react-bootstrap'
import { useHistory } from 'react-router';
const Home = () => {
    const ctx = useContext(UserContext);
 let userName= useRef();
 let roomno = useRef();
  let history = useHistory();
let submithandler = ()=>{
    if(userName.current.value.trim() && roomno.current.value.trim()){
         ctx.setContext(userName.current.value,roomno.current.value);
         history.push('/chat');
         userName.current.value = '';
         roomno.current.value = '';

    }

}

    return (
      <Container>
              <Row className='mt-4'>
           <Col sm={12} md={12} lg={4}>
           </Col>
         
           <Col sm={12} md={12} lg={4} >
           <h3 className='border-secondary'>Join Or Create Room 😍😍😎</h3>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">UserName</label>
      <input type="text" className="form-control" id="exampleInputEmail1" ref={userName} aria-describedby="username" placeholder="@username" />
     
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1" className="form-label mt-4">Room No</label>
      <input type="text" className="form-control" id="exampleInputPassword1" ref={roomno} placeholder="roomno"/>
    </div>
   
           </Col>
           <Col sm={12} className='d-flex justify-content-center mt-3' >
           <button type="button" onClick={submithandler} className="btn  btn-secondary">Enter Room</button>
           </Col>
       </Row>
       </Container>
 
    )
}

export default Home
