import React,{ useState } from 'react'
import { Button,} from "react-bootstrap"
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
      navigate("/")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div className='admindash'>
      <h1>admin dashboard</h1>
      <div className="id"><strong>Email:</strong> {currentUser.email}</div>
      <Button variant="link" onClick={handleLogout} >
          Log Out
        </Button>
    </div>
  )
}

export default AdminDashboard
