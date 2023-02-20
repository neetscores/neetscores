import React from 'react'
import TopImg from './TopImg'
import '../App.css'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function AboutUs() {
  return (
    <div>
      <TopImg/>
      <Grid2>
      <h1 className='Neet'>NEET College Predictor</h1>
      <p className='Find'>Find top colleges and top branches that you can opt for based on your NEET rank</p>
      <div className='aboutp'>
        <h3 style={{fontSize:'2em',fontWeight:'900'}}>What we do?</h3>
        <p>NEET UG 2023 All over Ap State Counsellings College Predictor</p>
        <p>Know your admission chances in Medical colleges with NEET Rank</p>
        <p>Get a personalised report with Top MBBS Colleges</p>
        <p>Check course & counselling wise cut-offs of NEET for various state quotas, caste groups etc.</p>
      </div>
      </Grid2>
      
    </div>
  )
}

export default AboutUs
