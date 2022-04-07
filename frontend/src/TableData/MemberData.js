import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import axios from "axios"
import {RiEditCircleFill} from "react-icons/ri"
import {AiFillDelete} from "react-icons/ai"
const MemberData = () => {
    const [data,setData]=useState([]);
    const [searchTerm,setsearchTerm]=useState("");

    

    const loadData=async()=>{
        await axios.get("http://localhost:5000/getmember").then((response)=>setData(response.data)).catch((error)=>console.log(error));
        return;
    }
    useEffect(()=>{
        loadData();
    },[])
    console.log(data);
  return (
      <>
      <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
        <input style={{height:"2rem",marginRight:"1rem"}} type="text" placeholder='सदस्यको नाम खोज्नुहोस्...' onChange={(event)=>setsearchTerm(event.target.value)}/>
        <Button size="sm" style={{marginRight:"2rem"}}>सदस्य थप्नुहोस्</Button>

      </div>
      <div style={{height:"68vh",overflow:"auto",padding:"1rem"}}>
        
    <Table responsive striped bordered hover size="sm">
  <thead >
    <tr>
      <th>S.No</th>
      <th>Member Number</th>
      <th>Joining Date</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Local Address</th>
      <th>Contact_no</th>
      <th>Action</th>
      
    </tr>

  </thead>
  {data.length===0?(
      <tbody>
        
        <p style={{textAlign:"center",color:"red"}}>No Data Found</p>
        
      </tbody>
          
            
          
      
  ):(
      data.filter((value)=>{
        if(searchTerm===""){
            return value;
        }else if(value.Customer_Name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        }
      }).map((item,index)=>(
        <tbody key={index}>
        <tr>
            <td>{index+1}</td>
            <td>{item.member_no}</td>
            <td>{item.join_date}</td>
            <td>{item.member_name}</td>
            <td>{item.gender}</td>
            <td>{item.local_ward_no},{item.local_gapa_napa},{item.local_district},{item.local_provinces}</td>
            <td>{item.contact_no}</td>
            <td style={{height:"3.5rem",display:"flex",justifyContent:"space-between"}}>
                <div><RiEditCircleFill/></div>
                <div><AiFillDelete/></div>
            </td>
        </tr>
    </tbody>
      ))
    
  )}
  
</Table>
</div>
</>
  )
}
export default MemberData

    /* <tr>
      <th>s.no</th>
      <th>id</th>
      <th>member_type_id</th>
      <th>member_no</th>
      <th>join_date</th>
      <th>member_name</th>
      <th>gender</th>
      <th>dob</th>
      <th>permanent_provininces</th>
      <th>permanent_district</th>
      <th>permanet_gapa_napa</th>
      <th>permanent_ward_no</th>
      <th>local_provinces</th>
      <th>local_district</th>
      <th>local_gapa_napa</th>
      <th>local_ward_no</th>
      <th>Contact_no</th>
      <th>profession</th>
      <th>spouse_name</th>
      <th>other_info</th>
      <th>status</th>
      <th>created_at</th>
      <th>updated_at</th>
      <th>Action</th>
      
    </tr>
    */