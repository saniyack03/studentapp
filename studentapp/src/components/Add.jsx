import { Button,  TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Add = () => {
    var navigate=useNavigate()
    var location=useLocation()
     console.log(location.state)
   
    var[student,setStudent]=useState({Name:"",Age:"",Department:"",Mark:""})

    const submitHandler=()=>{
      if(location.state!==null){
        //update
        axios.put("http://localhost:3004/update/"+location.state.val._id,student)
        .then((res)=>{
          alert(res.data)
          navigate("/view")
        })
      }
      else{
        axios.post("http://localhost:3004/add",student)
        .then((res)=>{
          alert(res.data)
          navigate("/view")
        })
      


    }
  }
     
   const Handleinput=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student)
   }
    
    
   
    if(location.state!==null){
       useEffect(()=>{
        setStudent({...student,
          Name:location.state.val.Name,
          Age:location.state.val.Age,
          Department:location.state.val.Department,
          Mark:location.state.val.Mark,
        })
       }
       ,[])

    }

  return (
    <div><br /><br /><br />
    <center><h2><u>ADD STUDENT</u></h2></center>
    <TextField  label="Name" variant="outlined" name='Name'  value={student.Name} onChange={Handleinput} /><br /><br />
    <TextField  label="Age" variant="outlined" name='Age'  value={student.Age} onChange={Handleinput}/><br /><br />
    <TextField label="Department" variant="outlined" name='Department'  value={student.Department} onChange={Handleinput} /><br /><br />
    <TextField label="Mark" variant="outlined" name='Mark'  value={student.Mark} onChange={Handleinput}/><br /><br />
    <Button variant="contained" color='info'onClick={submitHandler}>ADD</Button>
    </div>
  )
}

export default Add
