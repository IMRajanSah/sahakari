import React from 'react'
import {Tab,Nav,Row,Col} from "react-bootstrap"
import Loan from './Loan'
import Member from './Member'
import Saving from './Saving'
import Transaction from './Transaction'

const MyNavBar = () => {
  return (
    <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={{marginRight:"0",marginLeft:"0"}}>
    <Col sm={2} style={{height:"92vh",backgroundColor:"#212529",fontSize:"1.05rem",paddingRight:"0"}}>
      
      <Nav variant="pills" className="flex-column" >
      <Nav.Item>
          <Nav.Link style={{cursor:"pointer",padding:"1rem",color:"white"}} eventKey="first">सदस्यता</Nav.Link>
        </Nav.Item>

        <Nav.Item >
          <Nav.Link style={{cursor:"pointer",padding:"1rem",color:"white"}} eventKey="second" >बचत</Nav.Link>
        </Nav.Item>

        <Nav.Item >
          <Nav.Link style={{cursor:"pointer",padding:"1rem",color:"white"}} eventKey="third" >ऋण</Nav.Link>
        </Nav.Item>
        
        <Nav.Item >
          <Nav.Link style={{cursor:"pointer",padding:"1rem",color:"white"}} eventKey="fourth" >करोबार</Nav.Link>
        </Nav.Item>
      </Nav>
      

    </Col>
    <Col sm={10} style={{paddingRight:"0",paddingLeft:"0"}}>

      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Member/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Saving/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Loan/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Transaction/>
        </Tab.Pane>
      </Tab.Content>

    </Col>
  </Row>
</Tab.Container>

    </div>
  )
}

export default MyNavBar