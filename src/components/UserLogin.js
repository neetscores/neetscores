import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert,Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useAuth } from "../contexts/AuthContext";
import '../App.css'

const UserLogin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const {setUpRecaptha} = useAuth(); 

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
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

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/result");
    } catch (err) {
      setError("invalid otp");
    }
  };

  return (
    <div className="userlogin">
<div style={{ width: '18rem',float:"right" }} className="userlog">
<h2 className="mb-3 text-center" style={{opacity:"0.5"}}>Login</h2>
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
            <Button type="submit" variant="primary">
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
            <Link to="/">
              <Button variant="secondary" style={{float:"right"}}>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary" >
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </div>
    <div className="logo">
      <p>NEET</p>
      <p>COLLEGE</p>
      <p>PREDICTOR</p>
      </div>
</div>
  );
};

export default UserLogin;
