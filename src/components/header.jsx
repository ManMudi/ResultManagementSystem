
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
      <>   
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ZanTechnologies</Navbar.Brand>
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/work">Work</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/testimonial">Testimonial</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/listStudents">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
 
    );
};

export default Header;
