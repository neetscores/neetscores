import React, { useState } from 'react'
import { FormControl,InputLabel,Input,Select,MenuItem} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../App.css'
import TopImg from './TopImg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Neetasp = () => {

    const [rollno,setrollno]=useState(0);
    const [rank, setrank] = useState('');
    const [seatType, setseatType] = useState('');
    const [errors, setErrors] = useState({});
  
    function validateForm(){
      let errors={};
      if(rollno.length!==10){
        errors.rolllen="enter 10 digit number";
      }
      if(!rank){
        errors.rank="rank required"
      }
      if(!seatType){
        errors.seatType="select seat type"
      }
      return errors;
    }
    function handleSubmit(event) {
      event.preventDefault();
    
      const errors = validateForm();
    
      if (Object.keys(errors).length === 0) {
        // Submit the form
      } else {
        setErrors(errors);
      }
    }
  return (
    <>
    <TopImg/>
      <div className='resultform'>
        <form onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 550 }}>
    <Card variant="outlined" width='20em'>
    <React.Fragment>
    <CardContent>
    <h5>Enter National Eligibility cum Entrance Test (NEET) Exam Details</h5>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <Box sx={{ width: '80%' }}>
    <Stack spacing={2}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
      <InputLabel htmlFor="my-input">NEET Roll no </InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" type='number'  onChange={(e)=>setrollno(e.target.value)}  />
      <span className='span'>{(rollno===0 || rollno==='') && errors.rollno}</span>
      <span className='span'>{rollno.length!==10 && errors.rolllen}</span>
      </FormControl>

      

      
      {rollno.length===10 && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel htmlFor="my-input">NEET rank </InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" type='number' onChange={(e)=>setrank(e.target.value)}  />
          <span className='span'>{!rank && errors.rank}</span>
        </FormControl>
      )}
      {rank!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
          <InputLabel id="demo-simple-select-standard-label">Seat Type in Andhra Pradesh Counselling</InputLabel>
        <Select
          value={seatType}
          name='seatType'
          
          onChange={(event) => {
            setseatType(event.target.value);
          }}
        >
          <MenuItem value={"Government"}>Government Quota Seats</MenuItem>
        <MenuItem value={"Management"}>Management Quota Seats</MenuItem>
        <MenuItem value={"NRI"}>NRI Quota Seats</MenuItem>
        </Select>
        <span className='span'>{!seatType && errors.seatType}</span>
      </FormControl>)}
    </Stack>
  </Box>
      </Typography>
    </CardContent>
    <CardActions>
    <Button  className="w-50  mt-2" type="submit"  variant="contained" color="success">Predict</Button>
    </CardActions>
    <ArrowBackIcon></ArrowBackIcon>
    <Button className='goback'><Nav.Link  as={Link} to={"/result"} >Go back</Nav.Link></Button>
  </React.Fragment>
    </Card>
  </Box>
  </form>
      </div>

      <div>
        {rollno} {rank} {seatType}
      </div>
    </>
  )
}

export default Neetasp
