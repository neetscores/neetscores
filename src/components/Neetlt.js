import React, { useState } from 'react'
import { FormControl,InputLabel,Input,Select,MenuItem, Radio,FormControlLabel, RadioGroup} from '@mui/material';
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
import { FormLabel } from 'react-bootstrap';
import TopImg from './TopImg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Neetlt = () => {
    

    const [tScore,settScore]=useState(0);
    const [seatType, setseatType] = useState('');
    const [localStatus, setlocalStatus] =useState('');
    const [ph, setph] = useState('');
    const [cap, setCap]=useState('');
    const [ews, setEws]=useState('');
    const [ncc, setNcc]=useState('');
    const [scandgu, setScandgu]=useState('');
    const [sandg, setSandg]=useState('');
    const [pmc, setPmc]=useState('');
    const [minority, setMinority]= useState('');
    const [Caste,setCaste] =useState('');
    const [bcSub, setBCsub] =useState('');
    const [casteInp,setCasteInp]=useState('');
    const [gender,setgender] =useState('');
    const [errors, setErrors] = useState({});
  
    function validateForm(){
      let errors={};
      if(tScore==="" || tScore===0){
        errors.tScore="target score is required";
      }
      if(!seatType){
        errors.seatType="select seat type"
      }
      if(!localStatus){
        errors.localStatus="select local status"
      }
      if(!ph){
        errors.ph="select physically disabled yes or no"
      }
      if(!Caste){
        errors.Caste="select caste"
      }
      if(!bcSub){
        errors.bcSub="select sub caste"
      }
      if(!gender){
        errors.gender="select gender"
      }
      if(!minority){
        errors.minority="required field"
      }
      if(!cap){
        errors.cap="required"
      }
      if(!ews){
        errors.ews="elegible for ews or not"
      }
      if(!ncc){
        errors.ncc="applicable or not"
      }
      if(!scandgu){
        errors.scandgu="applicable or not"
      }
      if(!sandg){
        errors.sandg="applicable or not"
      }
      if(!pmc){
        errors.pmc="elegible or not"
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
      <FormControl>
      <InputLabel htmlFor="my-input">enter target score</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" type='number' onChange={(e)=>settScore(e.target.value)}  />
      <span className='span'>{(tScore===0 || tScore==='') && errors.tScore}</span>
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

      {seatType !== ''  && (tScore!==0 && tScore!=='') && (
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
            value={ph}
            name='ph'
            
            onChange={(event) => setph(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!ph && errors.ph}</span>
        </FormControl>
      )}

{ph !== '' && (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Minority</InputLabel>
          <Select
            value={minority}
            name='minority'
            
            onChange={(event) => setMinority(event.target.value)}
          >
            <MenuItem value={"christian"}>Christian</MenuItem>
            <MenuItem value={"muslim"}>Muslim</MenuItem>
            <MenuItem value={"others"}>Others</MenuItem>
          </Select>
          <span className='span'>{!minority && errors.minority}</span>
        </FormControl>
      )}

{minority !== '' && (<>
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
</>
      )}
      {Caste!=='' && (
        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" value={gender} name='gender'  onChange={(event)=>setgender(event.target.value)}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <span className='span'>{!gender && errors.gender}</span>
    </FormControl>
      )}

      {gender!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">CAP</InputLabel>
          <Select
            value={cap}
            name='cap'
            
            onChange={(event) => setCap(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!cap && errors.cap}</span>
        </FormControl>)}

        {cap!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">EWS</InputLabel>
          <Select
            value={ews}
            name='ews'
            
            onChange={(event) => setEws(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!ews && errors.ews}</span>
        </FormControl>)}

        {ews!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">NCC</InputLabel>
          <Select
            value={ncc}
            name='ncc'
            
            onChange={(event) => setNcc(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!ncc && errors.ncc}</span>
        </FormControl>)}


        {ncc!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">SC&GU</InputLabel>
          <Select
            value={scandgu}
            name='scandgu'
            
            onChange={(event) => setScandgu(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!scandgu && errors.scandgu}</span>
        </FormControl>)}

        {scandgu!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">S&G</InputLabel>
          <Select
            value={sandg}
            name='sandg'
            
            onChange={(event) => setSandg(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!sandg && errors.sandg}</span>
        </FormControl>)}


        {sandg!=='' && (<FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">PMC</InputLabel>
          <Select
            value={pmc}
            name='pmc'
            
            onChange={(event) => setPmc(event.target.value)}
          >
            <MenuItem value={"yes"}>yes</MenuItem>
  <MenuItem value={"no"}>no</MenuItem>
          </Select>
          <span className='span'>{!pmc && errors.pmc}</span>
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
        {tScore} {casteInp} {minority} {localStatus} {gender} {cap} {ph} {ews} {ncc} {scandgu} {sandg} {pmc}
      </div>
    </>
  )
}

export default Neetlt
