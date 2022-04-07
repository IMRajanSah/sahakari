import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Myheader from "../components/Header_level1"
const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmPassword]=useState("");

  const navigate=useNavigate();

  const [mypassworderror,setpasswordError]=useState("");
  const [registererror,setregistererror]=useState("");
  
  const onSubmit=async()=>{
    if(password===confirmpassword)
    {
      await Axios.post("http://localhost:5000/auth/register",{name:name,email:email,password:password,confirmpassword:confirmpassword}).then((response)=>{
          navigate("/login");
      },(error)=>{
          setregistererror(error.message);
          console.log(error);
      })
      
    }
    else{
      setpasswordError("Password Not Matched");
    }
  }
  useEffect(()=>{

  },[])
  return (
    <div>
      <Myheader/>
      <Card style={{margin:'2rem auto' ,width: '45rem' }}>
  
  <Card.Body>
    <Card.Title>Login </Card.Title>
    <Card.Text>

    <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name"  onChange={(event)=>{setName(event.target.value)}}/>
  </Form.Group>

    <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" onChange={(event)=>{setEmail(event.target.value)}} required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" onChange={(event)=>{setConfirmPassword(event.target.value)}} required/>
  </Form.Group>
  
  {mypassworderror || registererror ?(
   <p style={{color:"red"}}>{mypassworderror} {registererror}</p>
  ):(
      <p></p>
  )}

  <Button variant="primary" onClick={onSubmit}>
    Submit
  </Button>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <p>After Registeration Contact Admin to verify your login credentials</p>
  </Card.Footer>
</Card>
    </div>
  )
}

export default Register