import { Alert,Form, Button, Card } from "react-bootstrap";
import React, { useRef, useState,useEffect } from "react";
import { useAuth} from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import '../App.js'

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
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/admin')
    } catch(e) {
      setError("Failed to Log in")
      console.log(e)
    }

    setLoading(false)
  }

  return (
    <div className="Login">
      <p id="adminp">Admin</p>
      <div className='box b2'></div>
      <div className='box b3'></div>
      <div className='box b4'></div>
      <div className='box b5'></div>
      <div className='box b6'></div>
      <div className='box b9'></div>
      <div className='box b11'></div>
      <div className='box b12'></div>
      <div className='box b13'></div>
      <div className='box b15'></div>
      <div className='box b17'></div>
      <div className='box b18'></div>
      <div className='box b19'></div>
      <div className='box b20'></div>
      <div className='box b21'></div>
      <div className='box b22'></div>
      <div className='box b23'></div>
      <div className='box b24'></div>
      <div className='box b25'></div>
      <div className='box b26'></div>
      <div className='box b27'></div>
      <div className='box b28'></div>
      <div className='box b29'></div>
      <div className='box b30'></div>
      <div className="logincard">
          <h2 className="text-center mb-4" style={{opacity:"0.5"}}>Admin Login</h2>
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
            <Button disabled={loading} className="w-100 mt-2" type="submit" id="adminbut">
               Log in
            </Button>
          </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
