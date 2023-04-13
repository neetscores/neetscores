import React,{ useState } from 'react'
import { Button } from '@material-ui/core';
import { useAuth } from "../contexts/AuthContext"
import {  useNavigate } from "react-router-dom"
import '../App.css'
import Sidebar from '../sidebar/Sidebar';
import SidePart from '../sidebar/SidePart';
import TopImg from './TopImg';

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
    <>  <div style={{height:'100vh'}}>
      {/* <TopImg/> */}
      <div style={{position:'fixed'}}><Sidebar/></div>
        <SidePart/>
    </div>
        

    </>
  )
}

export default AdminDashboard