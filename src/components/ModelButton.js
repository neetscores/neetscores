import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function ModelButton(props) {
  return (
    <div>
      <Button style={{marginTop:"-0.3em", fontSize:"1.5em",fontFamily: 'cursive',color:'antiquewhite',textTransform:'lowercase'}} onClick={props.handleOpen}><Nav.Link as={Link} to={'./'}>user</Nav.Link></Button>
    </div>
  )
}

export default ModelButton
