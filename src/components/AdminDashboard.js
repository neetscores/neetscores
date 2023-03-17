import React from 'react'
import '../App.css'
import Sidebar from '../sidebar/Sidebar';
import SidePart from '../sidebar/SidePart';
import TopImg from './TopImg';

function AdminDashboard() {
  return (
    <>  <div style={{height:'100vh'}}>
      <TopImg/>
        <Sidebar/>
        <SidePart/>
    </div>
        

    </>
  )
}

export default AdminDashboard