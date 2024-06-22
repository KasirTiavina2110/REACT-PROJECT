import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="container-fluid">
      <Navbar.Brand as={Link} to="/">ReactAPI</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/Film">Film</Nav.Link>
          <Nav.Link as={Link} to="/Serie">Serie</Nav.Link>
          <Nav.Link as={Link} to="/Naruto">Naruto</Nav.Link>
          <Nav.Link as={Link} to="/Apropos">À propos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
