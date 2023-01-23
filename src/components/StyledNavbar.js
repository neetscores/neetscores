import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import { TbStethoscope } from "react-icons/tb";


function StyledNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand><Nav.Link className='navlinks' as={Link}  to={"/"} style={{fontSize:"2em",padding:"0",position:"fixed",top:"0"}}><TbStethoscope/></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link className='navlinks' as={Link} style={{marginLeft:"3em", fontSize:"1.2em"}} to={"/"}>Home</Nav.Link>
          <Nav.Link className='navlinks' as={Link} style={{marginLeft:"3em",fontSize:"1.2em"}} to={"/about"}>About</Nav.Link>
            <Nav.Link className='navlinks' as={Link} style={{marginLeft:"3em",fontSize:"1.2em"}} to={"/adminlogin"}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default StyledNavbar;
