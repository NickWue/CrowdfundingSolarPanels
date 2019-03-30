import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';
import solarpanel from './solarpanel.jpeg';

class InvestorDashboard extends Component {
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
          <Card style={{width: '20rem'}}>
            <Card.Img variant="top" src={solarpanel}/>
            <Card.Body>
              <Card.Title>Morocco</Card.Title>
              <Card.Text>This is a description</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Status: <mark style={{color: 'Orange'}}>Building</mark></ListGroupItem>
              <ListGroupItem>Return on investment: 10% per year</ListGroupItem>
            </ListGroup>
          </Card>
          <br/>
          <Button onClick={() => this.props.showMap()}
            variant="outline-primary" size="lg" type="submit">Find new project</Button>
        </div>
      );
    }
}

export default InvestorDashboard;