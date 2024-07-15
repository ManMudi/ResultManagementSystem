
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserService from '../service/userService';

const Sidebar = () => {

  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();


  const handleLogout = () => {
      const confirmDelete = window.confirm('Are you sure you want to logout this user?');
      if (confirmDelete) {
          UserService.logout();
      }
  };
    return (
        <>
       <Navbar style={{backgroundColor:'#3baaea'}} data-bs-theme="dark">
      <Container>
      {isAuthenticated ?<div><Navbar.Brand href="/listStudents">ZanTechnologies</Navbar.Brand></div> :
       <div><Navbar.Brand href="/login">ZanTechnologies</Navbar.Brand></div>}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {isAuthenticated && <div><Nav.Link as={Link} to='/listStudents'>Student</Nav.Link></div>}
          {isAuthenticated && <div><Nav.Link as={Link} to='/listLevels'>Class</Nav.Link></div>} 
          {isAuthenticated && <div><Nav.Link as={Link} to='/listSchools'>School</Nav.Link></div>}
          {isAdmin && <div><Nav.Link  as={Link} to="/accounts">Accounts</Nav.Link></div>}
          {isAuthenticated && <div>
            <NavDropdown title="Subject" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/subject/ordinary'>O-Level</NavDropdown.Item>
              <NavDropdown.Item href="#">A-Level</NavDropdown.Item>
            </NavDropdown>
            </div>}
          </Nav>
          <Nav color='white'>
          {isAuthenticated && <div>
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/profile-page'>Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login" onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            </div>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    );
};

export default Sidebar;