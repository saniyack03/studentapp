import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
 var navigate=useNavigate()
 
 var[user,setUser]=useState([])
  axios.get("http://localhost:3004/view")
  .then((res)=>{
    setUser(res.data)
    console.log(user)
  })
   const Handledelete =(id)=>{
    console.log(id)
    axios.delete("http://localhost:3004/remove/"+id)
    .then((res)=>{
     alert(res.data)
    })
  }
  
    
    const HandleUpdate =(val)=>{
      console.log("data",val)
      navigate("/add",{state:{val}})
    }
   
 
  return (
    <div>
      <br /><br />
      <center><h2>STUDENT DETAILS</h2></center>
      <TableContainer>
        <Table border='3'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Mark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val)=>(
              
                 <TableRow>
              <TableCell>{val.Name}</TableCell>
              <TableCell>{val.Age}</TableCell>
              <TableCell>{val.Department}</TableCell>
              <TableCell>{val.Mark}</TableCell>
              <Button variant='contained' color='inherit' onClick={()=>{Handledelete(val._id)}} >Delete</Button> &nbsp;
               <Button variant='contained' color='inherit' onClick={()=>{HandleUpdate(val)}} >Update</Button>
            </TableRow>
        
            
              
            ))}
            
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default View
