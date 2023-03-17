import { Alert,Button} from "@mui/material";
import { Form } from "react-bootstrap";
import React, { useRef, useState,useEffect } from "react";
import { useAuth} from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import '../App.js'
import TopImg from "./TopImg";
import SchoolIcon from '@mui/icons-material/School';
import Footeer from "./Footeer";

const AdminLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email,setEmail]=useState();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const [users,setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "admins");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UsersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      navigate('/admin')
    } catch(e) {
      setError("Failed to Log in")
      console.log(e)
    }

    setLoading(false)
  }

  return (
    <div className="">
      <TopImg/>
      <div className="adminside"></div>
      <div className="adminsides"></div>
      <p className='logoName' id="logoName"><SchoolIcon style={{fontSize:'8em',marginBottom:'0.5em'}}></SchoolIcon><p style={{display:'inline',color:'rgb(57, 77, 149,1)',fontSize:'5em',fontWeight:'900'}}>NEET<span style={{color:'black',fontWeight:'200'}}>Genie</span></p><hr className="hrline"></hr></p>
      <div className="logincard">
          <h2 className="text-center mb-4" style={{fontWeight:'900',fontFamily:'cursive'}}>Admin Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="emailg">
              <Form.Label>Email</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} onChange={(event) => {
            setEmail(event.target.value);}} required />
            </Form.Group>
            <Form.Group id="passwordg">
              <Form.Label>Password</Form.Label>
              <Form.Control  id="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit"  variant="contained" color="success">
               Log in
            </Button>
          </Form>
      </div>
      <Footeer/>
    </div>
  );
};

export default AdminLogin;
