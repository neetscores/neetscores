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
import Footeer from './Footeer'
import { DataGrid } from '@mui/x-data-grid';
const Neetasp = (props) => {

  const [formData, setFormData] = useState({ rollno: "", rank: "" });
  const [result, setResult] = useState({});
  const [allot,setAllot]=useState(0);
  const [flag,setFlag]=useState(true);
  const [flag1,setFlag1]=useState(false)
  const [min,setMin]=useState("");
  const [fetchData,setFetchData] =useState(-1);

      // api call----------------------------------------
  const handleSubmit = async(event) => {
    let urlLink;
    if(fetchData===0){
      urlLink="neetaspZero";
    }
    if(fetchData===5){
      urlLink="neetaspFive";
    }
    if(fetchData===10){
      urlLink="neetaspTen";
    }
    if(fetchData===15){
      urlLink="neetaspFifteen";
    }

    if(formData.rollno.length===10){
      event.preventDefault();
      await fetch(`/${urlLink}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data[0][0])
          if(data[0].length===0){
            setFlag1(true)
          }
          setAllot(data[0][0]["ALLOTMENT"])
          setMin(data[0][0].Minority)
          if(data[0][0]["ALLOTMENT"]!== null){
            setFlag(false)
            setFlag1(true)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else{
      return null;
    }
      
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  // data showing       


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'CollegeName',
      headerName: 'College Name',
      width: 500,
      editable: true,
    },
    {
      field: 'CollegeCode',
      headerName: 'College Code',
      width: 350,
      editable: true,
    },
  ];
  const data = [
    {id:1,CollegeName:'Andhra Medical College, Visakhapatnam',CollegeCode:'AMCV'},
    {id:2,CollegeName:'Guntur Medical College, Guntur',CollegeCode:'GMCG'},
    {id:3,CollegeName:'Rangaraya Medical College, Kakinada',CollegeCode:'RMCK'},
    {id:4,CollegeName:'Government Medical College (RIMS), Srikakulam',CollegeCode:'GMCS'},
    {id:5,CollegeName:'Government Medical College (RIMS), Ongole',CollegeCode:'GMCO'},
    {id:6,CollegeName:'NRI Institute of Medical Sciences, Visakhapatnam',CollegeCode:'NRIM'},
    {id:7,CollegeName:'Katuri Medical College & Hospital, Chinakondrupadu, Guntur, Dist',CollegeCode:'KATR'},
    {id:8,CollegeName:'Dr.Pinnamaneni Siddhartha Institute. Of Medical Sciences & Research Foundation, Chinaoutpalli, Gannavaram, Krishna Dist',CollegeCode:'PSIM'},
    {id:9,CollegeName:'Alluri Sitarama Raju Academy of Medical Sciences, Eluru\x02W.G. Dist',CollegeCode:'ASRA'},
    {id:10,CollegeName:'Konaseema Institute of Medical Sciences & Research Foundation, Amalapuram, E.G.Dist',CollegeCode:'KONA'},
    {id:11,CollegeName:'Maharaja Institute of Medical Sciences, Nellimarla, Vizianagaram',CollegeCode:'MAHA'},
    {id:12,CollegeName:'G.S.L. Medical College & Hospital, NH-5, Laxmipuram, Rajahmundry',CollegeCode:'GSLR'},
    {id:13,CollegeName:'NRI Academy of Medical Sciences, Chinakakani, Guntur',CollegeCode:'NRVP'},
    {id:14,CollegeName:'Great Eastern Medical School & Hospital, Ragolu (V), Srikakulam',CollegeCode:'GEMS'},
    {id:15,CollegeName:'Gayatri Vidya Parishad Inst. Of Health Care and Medical Technology, Visakhapatnam',CollegeCode:'GVPT'},
    {id:16,CollegeName:'Nimra Institute of Medical Sciences, Jupudi (V), Ibrahimpatnam (M), Vijayawada Krishna Dist',CollegeCode:'NIMR'},
    {id:17,CollegeName:'S.V. Medical College, Alipiri Road, Tirupathi',CollegeCode:'SVMC'},
    {id:18,CollegeName:'Kurnool Medical College, Kurnool',CollegeCode:'KMCK'},
    {id:19,CollegeName:'Government Medical College (RIMS), Kadapa',CollegeCode:'GMCK'},
    {id:20,CollegeName:'Government Medical College, Government Gen. Hosp. Road, Ananthapur',CollegeCode:'GMCA'},
    {id:21,CollegeName:'ACSR Government Medical College, Nellore',CollegeCode:'ACSR'},
    {id:22,CollegeName:'Narayana Medical College, Chinta Reddy Palem, Nellore',CollegeCode:'NARN'},
    {id:23,CollegeName:'PES Institute of Medical Sciences & Research, Kuppam',CollegeCode:'PESK'},
    {id:24,CollegeName:'Santhiram Medical College, Nandyal, Kurnool Dist',CollegeCode:'SRMC'},
    {id:25,CollegeName:'Viswabarathi Medical College, R.T. Nagar, Near Penchikalapadu, Kurnool',CollegeCode:'VMCK'},
    {id:26,CollegeName:'Apollo Institute of Medical Sciences & Research, Murukambattu (V), Chittoor District',CollegeCode:'APLC'},
    {id:27,CollegeName:'Sri Balaji Medical College Hospital and Research Institute , Renigunta, Tirupati',CollegeCode:'BMCT'},
    {id:28,CollegeName:'Sri Padmavathi Medical College for Women, Tirupati (under SVIMS, Tpt)',CollegeCode:'PADT'},
    {id:29,CollegeName:'Fathima Institute of Medical Sciences, Kadapa',CollegeCode:'FIMS'},
  ];
  let rows;
  if(min==="MUSLIM"){
    rows=data.slice(allot-1, 29)
  }
  else{
    rows=data.slice(allot-1, 28)
  }
  
  const reload=()=>{
    window.location.reload(false)
  }

  return (
    <>
    <TopImg />
    <div className='Neetdemo' style={{position:'absolute',top:'10em',display:(!flag && allot!=null) ? 'block' : 'none'}}>
    <Card sx={{ maxWidth: 550 }} style={{marginLeft:'2em'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Student Data
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>Rollno: {result?.NeetRollno}</p>
        </Typography>
        <Typography variant="body2">
        <p>Name:{result?.NameOfStudent}</p>
        <p>Rank:{result?.NeetRank}</p>
          <p>Score:{result?.NeetScore}</p>
        <p>LocalArea:{result?.LocalArea}</p>
        <p>Gender:{result?.Gender}</p>
        </Typography>
        <CardActions>
        <Button onClick={reload}>Predict another</Button>
        </CardActions>
      </CardContent>
    </Card>
        <h1>Based on your score:</h1>
        <p>You have chances to get seat in cat A colleges below</p>
        
        
      </div>
      <div className='Neetdemo' style={{position:'absolute',top:'5em',display:(flag && allot===null) ? 'block' : 'none'}}>
      <Card sx={{ maxWidth: 550 }} style={{marginLeft:'2em'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Student Data
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>Rollno: {result?.NeetRollno}</p>
        </Typography>
        <Typography variant="body2">
        <p>Name:{result?.NameOfStudent}</p>
        <p>Rank:{result?.NeetRank}</p>
          <p>Score:{result?.NeetScore}</p>
        <p>LocalArea:{result?.LocalArea}</p>
        <p>Gender:{result?.Gender}</p>
        </Typography>
        <CardActions>
        <Button onClick={reload}>Predict another</Button>
        </CardActions>
      </CardContent>
    </Card>
      <h1>Aww :(</h1>
      <p>Sorry no colleges Found</p>
      </div>
      <div className='resultform' style={{display:(flag &&(flag1 || allot!==null)) ? 'block' : 'none'}}>
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
      <Input  aria-describedby="my-helper-text" type="text" id="rollno" name="rollno" onChange={handleChange} value={formData.rollno} />
      <br />
      <span className='span'>{result?.NameOfStudent===undefined && "enter valid number"}</span>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, maxWidth: 400 }} style={{width:'12em'}}>
          <InputLabel id="demo-simple-select-standard-label">AIQ excluding percentage</InputLabel>
            <Select
              value={fetchData}
              name='fetchData'
              onChange={(e)=>setFetchData(e.target.value)}
            >
              <MenuItem value={0}>0 %</MenuItem>
              <MenuItem value={5}>5 %</MenuItem>
              <MenuItem value={10}>10 %</MenuItem>
              <MenuItem value={15}>15 %</MenuItem>
            </Select>
          </FormControl>
          <span className='span'>{flag1 && "try in other percentage"}</span>
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
      
      <Box sx={{ height: 600, width: '70%' }} style={{margin:'2em 10em',display:(!flag && result!=null) ? 'block' : 'none'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        // pageSizeOptions={[5]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
        
        
        
        

       
      <Footeer/>
    </>
  )
}

export default Neetasp



