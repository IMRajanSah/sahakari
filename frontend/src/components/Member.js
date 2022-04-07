import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import MemberData from "../TableData/MemberData"
const Member = () => {
  return (
    <div>
         <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{backgroundColor:"#212529"}}>
  <Tab eventKey="Member Discription" title="सदस्यता विवरण" >
    <MemberData/>
  </Tab>
  <Tab eventKey="Present Member" title="वर्तमान सदस्यता">
    Present Member
  </Tab>
  <Tab eventKey="Past Member" title="विगतको सदस्यता">
    Past Member
  </Tab>
  </Tabs>
    </div>
  )
}

export default Member