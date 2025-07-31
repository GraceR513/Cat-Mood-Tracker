import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link as any} to="/">
        CAT MOOD TRACKER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="cat-navbar-nav" />
        <Navbar.Collapse id="cat-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link as any} to="/">Home</Nav.Link>
            <Nav.Link as={Link as any} to="/moods">View Moods</Nav.Link>
            <Nav.Link as={Link as any} to="/moods/new">Add Mood</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;