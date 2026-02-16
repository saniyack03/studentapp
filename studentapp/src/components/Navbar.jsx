import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar><br /><br /><br />
          <h3>studentapp</h3> &nbsp; &nbsp;
          <Link to='/add'>
          <Button variant='contained' color='info'>Add</Button></Link>&nbsp; &nbsp;
          <Link to='/view'>
          <Button variant='contained' color='info'>View</Button></Link>&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
