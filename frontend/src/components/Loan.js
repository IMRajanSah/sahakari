import React from 'react'
import {  Tab, Tabs } from 'react-bootstrap'

const Loan = () => {
  return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{backgroundColor:"#212529"}}>
  <Tab eventKey="Loan Discription" title="Loan Discription">
    Loan Discription
  </Tab>
  {/* <Tab eventKey="profile" title="Profile">
    2nd
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    3rd
  </Tab> */}
</Tabs>
    </div>
  )
}

export default Loan