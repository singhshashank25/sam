import React from "react";
import Contacts from "./contacts";
import CreateCard from "./createCard";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
function alumniPage() {
    return (
        <div>
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home">AlumniConnect</Navbar.Brand>
                </Container>
            </Navbar>
            {Contacts.map(CreateCard)}
        </div>
    );
}

export default alumniPage;