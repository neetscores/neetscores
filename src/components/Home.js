import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import TopImg from './TopImg'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Footeer from './Footeer';

function Home(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      
      <TopImg/>
      
      <h1 className='Neet'>NEET College Predictor</h1>
        <p className='Find'>Find top colleges and top branches that you can opt for based on your NEET rank</p>
        
      <div className='MainPage'>
        
      <h3 style={{opacity:'0.9',textAlign:'center'}}>How it Works?</h3>
      <Grid container spacing={2}>
        <Grid xs={4}>
        <Item>
          <Grid xs={2} style={{marginTop:'-1em'}}>
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </Grid>
          <Grid xs={5}>
          <p >Sign In on NEET Genie with your mobile number by entering otp</p>
          </Grid>
        </Item>
        </Grid>
        <Grid xs={4}>
        <Item >
        <Grid xs={2} style={{marginTop:'-1em'}}>
            <NoteAltOutlinedIcon></NoteAltOutlinedIcon>
          </Grid>
          <Grid xs={5}>
          <p >Enter your personal info and academic detalls (NEET Rank and score)</p>
          </Grid>
        </Item>
        </Grid>
        <Grid xs={4}>
        <Item >
        <Grid xs={2} style={{marginTop:'-1em'}}>
            <ArticleOutlinedIcon></ArticleOutlinedIcon>
          </Grid>
          <Grid xs={5}>
          <p >Get a list of colleges and top branches that you can seek admission Into</p>
          </Grid>
        </Item>
        </Grid>
      </Grid>
      </div>
      <Footeer/>
    </div>
  )
}

export default Home
