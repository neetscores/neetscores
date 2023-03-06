import React from 'react'
import Button from '@mui/material/Button';
import {CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import TopImg from './TopImg';
function UserDashBoard() {
  return (
    <div>
      <TopImg/>
      <Grid container justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="cardHolder">
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='Dh'>
            Current NEET participant
          </Typography>
          <Typography variant="body2" color="text.secondary" className='Dp'>
            <p>Predict your admission chances in MBBS seats through Andhra Pradesh counselling</p>
            <p>Includes 85% State Quota seats in govt. and private colleges through merit & management quota</p>
            <p>Check NEET state-wise cutoffs for 27 states of India</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="medium" color="warning" style={{marginLeft:"10em"}}>
        <Nav.Link  as={Link} to={"/neetasp"}>use now</Nav.Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='Dh'>
          Not a Current NEET participant
          </Typography>
          <Typography variant="body2" color="text.secondary" className='Dp'>
            <p>Predict your admission chances in MBBS seats through Andhra Pradesh counselling</p>
            <p>Includes 85% State Quota seats in govt. and private colleges through merit & management quota</p>
            <p>Check NEET state-wise cutoffs for 27 states of India</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="warning" style={{marginLeft:"10em"}}>
        <Nav.Link  as={Link} to={"/neetlt"}>use now</Nav.Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
      
      <div>
      {/* {rank} {seatType} {localStatus} {PDisabled} {SplQuota} {casteInp} {sex} */}
      </div>
    </div>
  )
}

export default UserDashBoard