import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';

class InvestorMap extends Component {
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
          <h1>Find new project</h1>
        </div>
      );
    }
}

export default InvestorMap;