import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [authlog,setauthlog]=useState(0);
    const [authError,setauthError]=useState("");
    const profileAuth= async()=>{
        await Axios.get("http://localhost:5000/checklog").then((response)=>{
            setauthlog(1);
            console.log(response);
        },(error)=>{
            setauthError(error.message);
            console.log(error);
        })
    }
    useEffect(()=>{
        profileAuth();
    },[])
    if(!authlog){
        return (
            <div>{authError}</div>
          )
    }
    else{
        return (
            <div>{authlog} profile accessable</div>
          )
    }
  
}

export default Profile