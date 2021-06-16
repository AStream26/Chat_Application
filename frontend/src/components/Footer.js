import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';

const Footer = () => {
    return (
       <footer style={{
           position:'relative'
           
       }}>
           <Container>
               <Row>
                   <Col className='d-flex justify-content-center'>
                  Copyright &copy; Astream26
                   </Col>
               </Row>
           </Container>
       </footer>
    )
}

export default Footer;
