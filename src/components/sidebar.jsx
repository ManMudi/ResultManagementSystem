
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Sidebar = () => {
    return (
        <><br/>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/">ZanTechnologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/listStudents'>Student</Nav.Link>
          <Nav.Link as={Link} to='/listLevels'>Class</Nav.Link>
          <Nav.Link as={Link} to='/listSchools'>School</Nav.Link>
            <NavDropdown title="Subject" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/subject/ordinary'>O-Level</NavDropdown.Item>
              <NavDropdown.Item href="#">A-Level</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Mohamed</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    );
};

export default Sidebar;