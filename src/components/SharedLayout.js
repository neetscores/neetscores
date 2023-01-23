import React from 'react'
import { Outlet } from 'react-router-dom'
import StyledNavbar from './StyledNavbar'
import Footeer from './Footeer'
import "../App.css"

function SharedLayout() {
  return (
    <div>
      <div className='mainnavbar'>
      <StyledNavbar className='mainnavbar'/>
      </div>
        <Outlet/>
        <Footeer/>
    </div>
  )
}

export default SharedLayout
