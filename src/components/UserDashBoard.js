import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FormControl,InputLabel,Input,Select,MenuItem, Radio,FormControlLabel, RadioGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css'
import { FormLabel } from 'react-bootstrap';
import TopImg from './TopImg';
function UserDashBoard() {

  const [rank,setRank]=useState(0);
  const [seatType, setseatType] = useState('');
  const [localStatus, setlocalStatus] =useState('');
  const [PDisabled, setPDisabled] = useState('');
  const [SplQuota,setSplQuota] =useState('');
  const [Caste,setCaste] =useState('');
  const [bcSub, setBCsub] =useState('');
  const [casteInp,setCasteInp]=useState('');
  const [sex,setSex] =useState('');
  const [errors, setErrors] = useState({});

  function validateForm(){
    let errors={};
    if(rank==="" || rank===0){
      errors.rank="rank is required";
    }
    if(!seatType){
      errors.seatType="select seat type"
    }
    if(!localStatus){
      errors.localStatus="select local status"
    }
    if(!PDisabled){
      errors.PDisabled="select physically disabled yes or no"
    }
    if(!SplQuota){
      errors.SplQuota="select applicable option"
    }
    if(!Caste){
      errors.Caste="select caste"
    }
    if(!bcSub){
      errors.bcSub="select sub caste"
    }
    if(!sex){
      errors.sex="select grnder"
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
    <div>
      <TopImg/>
      <div className='resultform'>
        <form onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 550 }}>
    <Card variant="outlined" width='20em'>
    <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <Box sx={{ width: '80%' }}>
    <Stack spacing={2}>
      <FormControl>
      <InputLabel htmlFor="my-input">NEET All India Overall Rank</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" type='number' onChange={(e)=>setRank(e.target.value)}  />
      <span className='span'>{(rank===0 || rank==='') && errors.rank}</span>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
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
      </FormControl>

      {seatType !== ''  && (rank!==0 && rank!=='') && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Local/Non-Local Status</InputLabel>
          <Select
            value={localStatus}
            name='localStatus'
            
            onChange={(event) => setlocalStatus(event.target.value)}
          >
            <MenuItem value={"AU"}>AU -Andhra University Region</MenuItem>
  <MenuItem value={"NA"}>Unreserved -Non local for all regions</MenuItem>
  <MenuItem value={"OU"}>OU -Osmania University Region</MenuItem>
  <MenuItem value={"SVU"}>SVU -Sri Venkateshwara University</MenuItem>
          </Select>
          <span className='span'>{!localStatus && errors.localStatus}</span>
        </FormControl>


      )}
      {localStatus !== '' && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Are you Physically Disabled?</InputLabel>
          <Select
            value={PDisabled}
            name='PDisabled'
            
            onChange={(event) => setPDisabled(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!PDisabled && errors.PDisabled}</span>
        </FormControl>
      )}

{PDisabled !== '' && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Do you have a Special Quota?</InputLabel>
          <Select
            value={SplQuota}
            name='SplQuota'
            
            onChange={(event) => setSplQuota(event.target.value)}
          >
            <MenuItem value={"Anglo"}>Anglo-Indian</MenuItem>
            <MenuItem value={"COAP"}>Children Of Armed Personnel</MenuItem>
            <MenuItem value={"NA"}>Not Applicable</MenuItem>
            <MenuItem value={"NCC"}>National Cadet Crops</MenuItem>
            <MenuItem value={"Sports"}>Sports Quota</MenuItem>
          </Select>
          <span className='span'>{!SplQuota && errors.SplQuota}</span>
        </FormControl>
      )}


{SplQuota !== '' && (<>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Caste Group</InputLabel>
          <Select
            value={Caste}
            name='Caste'
            
            onChange={(event) => {setCaste(event.target.value);setCasteInp(event.target.value)}}
          >
            <MenuItem value={"Open"}>Open</MenuItem>
  <MenuItem value={"BC"}>Backward Castes</MenuItem>
  <MenuItem value={"Sc"}>Scheduled Castes</MenuItem>
  <MenuItem value={"St"}>Scheduled Tribe</MenuItem>

          </Select>
          <span className='span'>{!Caste && errors.Caste}</span>
        </FormControl>
        {Caste ==='BC' && (
          <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
          <InputLabel id="demo-simple-select-standard-label">Sub-Caste in Backward Caste</InputLabel>
            <Select
              value={bcSub}
              name='bcSub'
              
              onChange={(event) => {setBCsub(event.target.value);setCasteInp(event.target.value)}}
            >
              <MenuItem value={"BCA"}>Backward Castes -A</MenuItem>
              <MenuItem value={"BCB"}>Backward Castes -B</MenuItem>
              <MenuItem value={"BCC"}>Backward Castes -C</MenuItem>
              <MenuItem value={"BCD"}>Backward Castes -D</MenuItem>
              <MenuItem value={"BCE"}>Backward Castes -E</MenuItem>
  
            </Select>
            <span className='span'>{!bcSub && errors.bcSub}</span>
          </FormControl>
          )}

        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" value={sex} name='sex'  onChange={(event)=>setSex(event.target.value)}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <span className='span'>{!sex && errors.sex}</span>
    </FormControl>
</>
      )}
      


    </Stack>
  </Box>
      </Typography>
    </CardContent>
    <CardActions>
    <Button  className="w-50  mt-2" type="submit"  variant="contained" color="success">Predict</Button>
    </CardActions>
  </React.Fragment>
    </Card>
  </Box>
  </form>
      </div>
      <div>
      {rank} {seatType} {localStatus} {PDisabled} {SplQuota} {casteInp} {sex}
      </div>
    </div>
  )
}

export default UserDashBoard