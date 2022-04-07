import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const Saving = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{backgroundColor:"#212529"}}>
  <Tab eventKey="Savings Discription" title="Savings Discription">
    Savings Discription
  </Tab>
  
  </Tabs>
    </div>
  )
}

export default Saving