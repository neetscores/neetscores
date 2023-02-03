import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import { TbActivityHeartbeat } from "react-icons/tb";


function StyledNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand><Nav.Link className='navlink' as={Link}  to={"/"} style={{fontSize:"2em",padding:"0",position:"fixed",top:"0"}}><TbActivityHeartbeat/></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link  as={Link} style={{marginLeft:"3em",fontSize:"1.2em",fontFamily: 'cursive'}} to={"/"}>Home</Nav.Link>
          <Nav.Link  as={Link} style={{marginLeft:"3em",fontSize:"1.2em",fontFamily: 'cursive'}} to={"/about"}>About</Nav.Link>
          <Nav.Link  as={Link} style={{marginLeft:"3em",fontSize:"1.2em",fontFamily: 'cursive'}} to={"/user"}>User</Nav.Link>
            <Nav.Link  as={Link} style={{marginLeft:"3em",fontSize:"1.2em",fontFamily: 'cursive'}} to={"/adminlogin"}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default StyledNavbar;
