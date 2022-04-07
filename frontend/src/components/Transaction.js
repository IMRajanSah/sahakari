import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const Transaction = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{backgroundColor:"#212529"}}>
  <Tab eventKey="Transaction Discription" title="Transaction Discription">
    Transaction Discription
  </Tab>
  
  </Tabs>
    </div>
  )
}

export default Transaction