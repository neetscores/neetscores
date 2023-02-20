import React,{ useState } from 'react'
import { Button } from '@material-ui/core';
import { useAuth } from "../contexts/AuthContext"
import {  useNavigate } from "react-router-dom"
import '../App.css'

function AdminDashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate();
  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/adminlogin")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div className='admindash'>
        <div style={{height:'100vh'}}>
          <h4 style={{position:'absolute',top:'10em',left:'20em'}}><div className="id"><strong>Loged as:</strong> {currentUser.email}<Button variant="contained" onClick={handleLogout}  color='primary' style={{marginLeft:'2em'}}>
          Log Out
        </Button></div>
      </h4>
        </div>

    </div>
  )
}

export default AdminDashboard