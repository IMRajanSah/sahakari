import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Myheader from "../components/Header_level1"
import Logout from './Logout';

const LogIn = () => {
    const [user_email,setEmail]=useState("");
    const [user_password,setPassword]=useState("");
    const [myerror,setError]=useState("");
    let navigate=useNavigate();
    Axios.defaults.withCredentials=true;
    const onSubmit=async ()=>{
        // console.log(user_email+" "+user_password);
        await Axios.post("http://localhost:5000/auth/login",{email:user_email,password:user_password}).then((response)=>{
            
            
                console.log(response);
                navigate('/');
                          
            // console.log(response);
            // setError("email or password Incorrect");
            
        },(error)=>{
            setError(error.message);
            console.log(error);
        });
      
        
    }
    const [authlog,setauthlog]=useState(0);
    const profileAuth= async()=>{
      await Axios.get("http://localhost:5000/checklog").then((response)=>{
          setauthlog(1);
          console.log(response);
      },(error)=>{
          console.log(error);
      })
  }
    useEffect(()=>{
      profileAuth()
    },[])
    if(authlog===0){
  return (
    <div>
      <Myheader/>
        <Card style={{margin:'2rem auto' ,width: '45rem' }}>
  
  <Card.Body>
    <Card.Title>Login </Card.Title>
    <Card.Text>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setEmail(event.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
  </Form.Group>
  
  <Button variant="primary" onClick={onSubmit}>
    Submit
  </Button>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  {myerror ?(
   <p style={{color:"red"}}>Login Unsuccessfull: {myerror}</p>
  ):(
      <p></p>
  )}
  </Card.Footer>
</Card>
    </div>
  )
    }else{
      return(
        <Logout/>
      )
    }
}

export default LogIn