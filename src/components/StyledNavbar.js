import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from '@material-ui/core';
import SchoolIcon from '@mui/icons-material/School';
import ModelLogin from './ModelLogin';


function StyledNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand><Nav.Link className='navlink' as={Link}  to={"/"} style={{fontSize:"1.5em",padding:"0",position:"absolute",top:"0.4em"}}><p className='logoName'><SchoolIcon style={{fontSize:'1.5em'}}></SchoolIcon><p style={{display:'inline',color:'rgb(57, 77, 149,1)',fontSize:'0.8em',fontWeight:'900'}}>NEET<span style={{color:'black',fontWeight:'200'}}>Genie</span></p></p></Nav.Link></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Button><Nav.Link  as={Link} style={{fontSize:"1.2em",fontFamily: 'cursive'}} to={"/"}>Home</Nav.Link></Button>
          <Button><Nav.Link  as={Link} style={{fontSize:"1.2em",fontFamily: 'cursive'}} to={"/about"}>About</Nav.Link></Button>
          <Button><Nav.Link  as={Link} style={{fontSize:"1.2em",fontFamily: 'cursive'}} to={"/adminlogin"}>Admin</Nav.Link></Button>
          <ModelLogin/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default StyledNavbar;