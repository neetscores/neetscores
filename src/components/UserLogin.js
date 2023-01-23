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
      setError("some internal error");
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
  const time = document.getElementById("time");
const day = document.getElementById("day");
const midday = document.getElementById("midday");


  const  clock = setInterval(
    function calcTime() {
      let date_now = new Date();
      let hr = date_now.getHours();
      let min = date_now.getMinutes();
      let sec = date_now.getSeconds();
      let middayValue = "AM";
  
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
  
      day.textContent = days[date_now.getDay()];
  
      middayValue = hr >= 12 ? "PM" : "AM";
  
      if (hr === 0) {
        hr = 12;
      } else if (hr > 12) {
        hr -= 12;
      }
  
      hr = hr < 10 ? "0" + hr : hr;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
  
      time.textContent = hr + ":" + min + ":" + sec;
      midday.textContent = middayValue;
    },
  
    1000
  );

  return (
    <div className="userlogin">
<div class="snow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 550" preserveAspectRatio="xMidYMax slice">
    <g fill="#FFF" fill-opacity=".15" transform="translate(55 42)">
     <g id="snow-bottom-layer">
      <ellipse cx="6" cy="1009.5" rx="6" ry="5.5"/>
      <ellipse cx="138" cy="1110.5" rx="6" ry="5.5"/>
      <ellipse cx="398" cy="1055.5" rx="6" ry="5.5"/>
      <ellipse cx="719" cy="1284.5" rx="6" ry="5.5"/>
      <ellipse cx="760" cy="1155.5" rx="6" ry="5.5"/>
      <ellipse cx="635" cy="1459.5" rx="6" ry="5.5"/>
      <ellipse cx="478" cy="1335.5" rx="6" ry="5.5"/>
      <ellipse cx="322" cy="1414.5" rx="6" ry="5.5"/>
      <ellipse cx="247" cy="1234.5" rx="6" ry="5.5"/>
      <ellipse cx="154" cy="1425.5" rx="6" ry="5.5"/>
      <ellipse cx="731" cy="773.5" rx="6" ry="5.5"/>
      <ellipse cx="599" cy="874.5" rx="6" ry="5.5"/>
      <ellipse cx="339" cy="819.5" rx="6" ry="5.5"/>
      <ellipse cx="239" cy="1004.5" rx="6" ry="5.5"/>
      <ellipse cx="113" cy="863.5" rx="6" ry="5.5"/>
      <ellipse cx="102" cy="1223.5" rx="6" ry="5.5"/>
      <ellipse cx="395" cy="1155.5" rx="6" ry="5.5"/>
      <ellipse cx="826" cy="943.5" rx="6" ry="5.5"/>
      <ellipse cx="626" cy="1054.5" rx="6" ry="5.5"/>
      <ellipse cx="887" cy="1366.5" rx="6" ry="5.5"/>
      <ellipse cx="6" cy="241.5" rx="6" ry="5.5"/>
      <ellipse cx="138" cy="342.5" rx="6" ry="5.5"/>
      <ellipse cx="398" cy="287.5" rx="6" ry="5.5"/>
      <ellipse cx="719" cy="516.5" rx="6" ry="5.5"/>
      <ellipse cx="760" cy="387.5" rx="6" ry="5.5"/>
      <ellipse cx="635" cy="691.5" rx="6" ry="5.5"/>
      <ellipse cx="478" cy="567.5" rx="6" ry="5.5"/>
      <ellipse cx="322" cy="646.5" rx="6" ry="5.5"/>
      <ellipse cx="247" cy="466.5" rx="6" ry="5.5"/>
      <ellipse cx="154" cy="657.5" rx="6" ry="5.5"/>
      <ellipse cx="731" cy="5.5" rx="6" ry="5.5"/>
      <ellipse cx="599" cy="106.5" rx="6" ry="5.5"/>
      <ellipse cx="339" cy="51.5" rx="6" ry="5.5"/>
      <ellipse cx="239" cy="236.5" rx="6" ry="5.5"/>
      <ellipse cx="113" cy="95.5" rx="6" ry="5.5"/>
      <ellipse cx="102" cy="455.5" rx="6" ry="5.5"/>
      <ellipse cx="395" cy="387.5" rx="6" ry="5.5"/>
      <ellipse cx="826" cy="175.5" rx="6" ry="5.5"/>
      <ellipse cx="626" cy="286.5" rx="6" ry="5.5"/>
      <ellipse cx="887" cy="598.5" rx="6" ry="5.5"/>
     </g>
    </g>
    <g fill="#FFF" fill-opacity=".3" transform="translate(65 63)">
     <g id="snow-top-layer">
      <circle cx="8" cy="776" r="8"/>
      <circle cx="189" cy="925" r="8"/>
      <circle cx="548" cy="844" r="8"/>
      <circle cx="685" cy="1115" r="8"/>
      <circle cx="858" cy="909" r="8"/>
      <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)"/>
      <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)"/>
      <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)"/>
      <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)"/>
      <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)"/>
      <circle cx="8" cy="8" r="8"/>
      <circle cx="189" cy="157" r="8"/>
      <circle cx="548" cy="76" r="8"/>
      <circle cx="685" cy="347" r="8"/>
      <circle cx="858" cy="141" r="8"/>
      <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)"/>
      <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)"/>
      <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)"/>
      <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)"/>
      <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)"/>
     </g>
    </g>
</svg>
</div>
<div className="clockbox">
	<div class="container">
		<div className="clock">
			<div id="day"></div>
			<div className="wrapper">
				<div id="time"></div>
				<div id="midday"></div>
			</div>
		</div>
	</div>
</div>
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
