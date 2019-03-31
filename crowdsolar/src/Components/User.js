import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';

class Home extends Component {
    state = {
        
      };
   

  render() {
    const pageStyle = {
        paddingTop:"100px",
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingRight: "10%",
        paddingLeft: "10%",
        // backgroundImage: `url(${home})`,
        // backgroundSize:"100%",
      }
    
    return (
        <Form >
        <Form.Group controlId="details.Address">
          <Form.Label>Estimated Total Price</Form.Label>
          <br/>
          <Form.Label>{ "$"  + this.props.totalValue}</Form.Label>
          
        <br/>
        <Form.Label>Your investment: ${this.props.totalValue - this.state.crowdCost}</Form.Label>
        <br/>
          <Form.Label>Crowd investment: ${this.state.crowdCost}</Form.Label>
            <br/>
          
          <Button onClick={() => this.props.setCost(this.state.ownerCost, this.state.crowdCost)} variant="outline-primary" size="lg" type="submit">Submit preferences</Button>
        </Form.Group>

      </Form>

    );
  }
}

export default Home;
