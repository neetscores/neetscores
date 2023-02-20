import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <center>
      <h1>Aw, Snap</h1>
      <p>go back: <Link to='/'>Home</Link></p>
      </center>
    </div>
  )
}

export default Error
