import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Markdown Previewer</Navbar.Brand>
        <Nav.Link href="#editor">Editor</Nav.Link>
        <Nav.Link href="#previewer">Previewer</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;
