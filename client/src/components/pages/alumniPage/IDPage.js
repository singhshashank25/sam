import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Image, Row, Col } from "react-bootstrap";

import image from '../../images/image3.jpg'
function IDPage(props) {
    return (
    <div>
          <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home">AlumniConnect</Navbar.Brand>
                </Container>
            </Navbar> 
            <Container className='image-container' >
                <Row>
                    <Col  xs={12} md={4}>
                    <Image className='profile-image'src={image} rounded></Image>
                    </Col>
                    <Col  xs={6} md={8} >
                        <h3>ABOUT ME</h3>
                        <p> Hi my name is Parth Halani and I am your alumni from batch 2021. I am an SDE at UBER. Most of my work is in backend and improving UX and customer service. I am glad to be a part of IIIT Guwahati Family. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>WORK LIFE</h3>
                    <p>This is my linkedIn profile</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>GITHUB PROJECTS</h3>
                    <p>These are my github projects</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>RESUME</h3>
                    <p>Here you can find my winning resume!</p>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}

export default IDPage

