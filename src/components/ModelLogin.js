import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import '../App.css';
import ModelButton from './ModelButton';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useAuth } from "../contexts/AuthContext";
import { db } from "./firebase";
import { addDoc, collection,serverTimestamp,getCountFromServer } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
function ModelLogin() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const {setUpRecaptha} = useAuth(); 
  const [bool,setBool] =useState(false);

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number); 
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err);
    }
    
  };

  const [users,setUsers]=useState(0);

  const user=async()=>{
    const coll = collection(db, "users");
const snapshot = await getCountFromServer(coll);
console.log('count: ', snapshot.data().count);
setUsers(snapshot.data().count)
  }
  user();
  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      await addDoc(collection(db,"users"),{
        id:users+1,
        number:number,
        timeStamp:serverTimestamp(),
      }) 
      navigate("/result");
      setBool(true)
    } catch (err) {
      setError("invalid otp");
    }
    bool ? handleClose() : window.location.reload(false);
  };



    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false)
        window.location.reload(false);
    }
    const body = (
      <div style={modalStyle}>
        <h2 id="simple-modal-title">Sign Up</h2>
        <div className="userlog">
  <div className="p1">
    <h4><p style={{display:"inline",fontFamily:'fantasy',letterSpacing:'0.2em',color:'white'}}>NEET </p>Predict</h4>
    <hr style={{width:'15%'}}></hr>
    <p style={{marginTop:'-1.9em',paddingLeft:'1.7em'}}>A Carrer is a Life</p>
  </div>
  <div className="p2">
<h2 className="mb-3 text-center" style={{fontFamily:'cursive'}}>Login</h2>
      <div className="p-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput id="pnum"
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container" ></div>
          </Form.Group>
            <Button type="submit" variant="contained" color="primary">
              Send Otp
            </Button>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control id="potp"
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link>
              <Button variant="secondary" style={{float:"right"}} onClick={handleClose}>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </div>

        <CloseIcon onClick={(e)=>{setOpen(false);setError("");}} style={{position:'absolute',top:'5px',right:'-30px',cursor:'pointer'}}>close</CloseIcon>
      </div>
    );
  return (
    <div>
          <div>
      <Modal className='usermodal'
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <ModelButton handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
    </div>
  )
}

export default ModelLogin
