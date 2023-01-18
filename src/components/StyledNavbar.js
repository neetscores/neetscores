import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function StyledNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand><Nav.Link as={Link}  to={"/"}>Neet</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link as={Link} style={{marginLeft:"3em"}} to={"/"}>Home</Nav.Link>
          <Nav.Link as={Link} style={{marginLeft:"3em"}} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} style={{marginLeft:"3em"}} to={"/adminlogin"}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default StyledNavbar;
