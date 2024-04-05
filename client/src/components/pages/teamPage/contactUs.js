import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import createCard from '../alumniPage/createCard'
import Developers from './developers'
import Feedback from './feedback'
import image1 from '../../images/image1.jpg'
import Footer from '../homePage/Footer'

const contactUs = () => {
return(
    <div>
        <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home">AlumniConnect</Navbar.Brand>
                </Container>
    </Navbar>
    <Container style={{margin:50}}>
        <Row>
            <Col>
            <img src={image1} style={{width:500,height:250}} alt=""></img>
            </Col>
            <Col>
            <Row>
            <h3>Know Our Team</h3>
            </Row>
            <Row>
            Qui eiusmod nisi ipsum duis mollit eu quis velit ullamco aute duis do. Consequat sint non laboris et ex occaecat eiusmod. Aliquip aliqua cupidatat aute laboris ea aute deserunt non magna id adipisicing laboris veniam. Ad occaecat velit mollit cillum duis. Ut aliqua nostrud laborum cillum fugiat ex elit duis eiusmod aliquip eu ipsum in ex.
            </Row>
            <Row>
            <Button variant='outline-dark' href='https://iiitg.ac.in'>
              Share
            </Button>
            </Row>
            </Col>
        </Row>    
    </Container>
    <Container>
        <h3>Meet the developers</h3>
    {Developers.map(createCard)}
    </Container>
    <Container style={{margin:50}}>
        <Row>
            <Col>
            <img src={image1} style={{width:500,height:250}} alt=""></img>
            </Col>
            <Col>
            <Row>
            <h3>Indian Institute of Information Technology Guwahati</h3>
            </Row>
            <Row>
            Qui eiusmod nisi ipsum duis mollit eu quis velit ullamco aute duis do. Consequat sint non laboris et ex occaecat eiusmod. Aliquip aliqua cupidatat aute laboris ea aute deserunt non magna id adipisicing laboris veniam. Ad occaecat velit mollit cillum duis. Ut aliqua nostrud laborum cillum fugiat ex elit duis eiusmod aliquip eu ipsum in ex.
            </Row>
            <Row>
            <Button variant='outline-dark' href='https://iiitg.ac.in'>
                Visit Official Site
            </Button>
            </Row>
            </Col>
        </Row>    
    </Container>
    <Feedback/>
    <Footer/>
</div> 
)  
}

export default contactUs


//create a meet developers cards
//create a feedback form