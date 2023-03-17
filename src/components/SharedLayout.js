import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import StyledNavbar from './StyledNavbar'
import "../App.css"
import { ThemeProvider, createTheme} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';

function SharedLayout() {
  const [thm,setThm]=useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: thm ? 'light': 'dark',
    },
  });
  return (
    <div>
      <LightModeTwoToneIcon className='theme' onClick={()=>setThm(!thm)}>theme</LightModeTwoToneIcon>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='mainnavbar'>
      <StyledNavbar/>
      </div>
        <Outlet/>
    </ThemeProvider>
    </div>
  )
}

export default SharedLayout



