import  Axios  from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Company_Header from '../components/Header_level1'

const Logout = () => {
    const navigate=useNavigate();
    const logout=()=>{
        Axios.get("http://localhost:5000/auth/logout").then((response)=>{
            navigate("/register");
        },(error)=>{
            navigate("/register");
        })
    }
  return (
      <>
      <Company_Header/>
    <div style={{textAlign:"center"}}>
        <div>Already Logged In</div>
        <div><Button onClick={logout}>Log Out</Button></div>
    </div>
    </>
  )
}

export default Logout