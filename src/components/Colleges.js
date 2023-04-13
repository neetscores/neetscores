import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {FiArrowLeftCircle } from "react-icons/fi";
import {
    MenuItem,
  } from "react-pro-sidebar";
import Footeer from './Footeer';


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

  
const rows = [
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
  {id:30,CollegeName:'Nimra Institute of Medical Sciences, Jupudi (V), Ibrahimpatnam (M), Vijayawada Krishna Dist.',CollegeCode:'NIMR'},
];

function Colleges() {
  return (
    <div>
      <MenuItem icon={<FiArrowLeftCircle />} style={{display:'inline-block'}}><Nav.Link  as={Link} to={"/"} > Back </Nav.Link></MenuItem>
      <Box sx={{ height: 600, width: '70%' }} style={{marginLeft:'20em'}}>
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Footeer/>
    </div>
  )
}

export default Colleges


