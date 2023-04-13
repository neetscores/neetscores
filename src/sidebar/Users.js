import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Sidebar from './Sidebar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const usersCollection = firebase.firestore().collection("users");
        const querySnapshot = await usersCollection.get();
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
        console.log(usersData);
       
      };  
      fetchUsers();
    }, []);
    
    
  
    return (
      <div>
        <div style={{position:'fixed'}}><Sidebar/></div>
        
        <div style={{marginLeft:'20em'}}>
        </div>
    <TableContainer component={Paper} style={{paddingLeft:'20em',heigth:'100vh'}}>
      <Table sx={{ maxWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Registred/Logged in</TableCell>
            <TableCell align="right">Logged in time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          users.sort((a,b)=>a.id-b.id).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.timeStamp.toDate().toDateString()}</TableCell>
              <TableCell align="right">{row.timeStamp.toDate().toLocaleTimeString('en-US')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
}

export default Users

