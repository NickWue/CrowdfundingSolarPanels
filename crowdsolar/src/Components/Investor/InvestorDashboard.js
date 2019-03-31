import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';
import solarpanel from './solarpanel.jpeg';

class InvestorDashboard extends Component {
  
  getInvestments = email => {
    var investments;
    fetch('http://x10z.de/crowdsolar/getMyInvestments/'
    + '?userid=' + email
    )
    .then(data => investments = data);
    return(
      investments === [] ?
    <h1>you have no investments</h1>
    :
    investments.map((investment) => (
      <Card style={{width: '20rem'}}>
            <Card.Img variant="top" src={solarpanel}/>
            <Card.Body>
              <Card.Title>{investment.city}</Card.Title>
              <Card.Text>{investment.name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {/* <ListGroupItem>Status: <mark style={{color: 'Orange'}}>Building</mark></ListGroupItem> */}
              <ListGroupItem>Return on investment: {investment.returnsofarpercent}</ListGroupItem>
            </ListGroup>
          </Card>
    ))
    )
  }
    render() {
      const pageStyle = {
          paddingTop:"100px",
          // display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          paddingRight: "10%",
          paddingLeft: "10%"
      }
      
      return (
        <div style={pageStyle}>
          <h1>Your current projects</h1>
          
          <br/>
          <Button onClick={() => this.props.showMap()}
            variant="outline-primary" size="lg" type="submit">Find new project</Button>
        </div>
      );
    }
}

export default InvestorDashboard;