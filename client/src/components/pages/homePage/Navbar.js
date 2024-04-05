import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
function NavBar(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">AlumniConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/'>News/Events</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/'>Opportunities</NavLink></Nav.Link>
          <Nav.Link><NavLink to ="/contact">Contact Us</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/login'>Login</NavLink></Nav.Link>
          <NavDropdown title="Meet Alumni" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <NavLink to='/alumni'>Batch 2023</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <NavLink  to='/alumni'>Batch 2022</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink  to='/alumni'>Batch 2021</NavLink>
              </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink  to='/alumni'>Batch 2020</NavLink>
              </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink  to='/alumni'>Previous Years</NavLink>
              </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
             <NavLink  to='/login-signup'> Register</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;