import React, { useState } from 'react'
import Box from '@mui/material/Box';
import '../App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { db } from "../components/firebase";
import {  collection,getCountFromServer } from "firebase/firestore";





function SidePart() {
  const [hover, setHover]=useState(false)
  const [users,setUsers]=useState(0);

  const user=async()=>{
    const coll = collection(db, "users");
const snapshot = await getCountFromServer(coll);
console.log('count: ', snapshot.data().count);
setUsers(snapshot.data().count)
  }
  user();
  return (
    <>
    <Box sx={{ width: 1 }} className='gridbox'>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={6}>
        <Box gridColumn="span 2">
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         No of Registrations:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {users}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Nav.Link  as={Link} to={"/admin/users"} ><Button size='small'>see details</Button></Nav.Link>
      </CardActions>
    </Card>
        </Box>
        <Box gridColumn="span 5">
          {/* <Item>xs=4</Item> */}
        </Box>
        <Box gridColumn="span 6" className='collegeList' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          {hover && <Nav.Link  as={Link} to={"/admin/colleges"} ><Button className='List2'>colleges</Button></Nav.Link>}
          
          <div >
          {!hover && <div className='ClgImg'>
      </div>}
          </div>
        </Box>
        <Box gridColumn="span 2">
          
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default SidePart