import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class Home extends Component {
    
   

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
        <div style={pageStyle}>
        <Form >
        <Form.Group controlId="details.Address">
          <Form.Label>Name: {this.props.name}</Form.Label>
          <br/>
          <Form.Label>Email: {this.props.email}</Form.Label>
          <br/>
          <Button href="/" variant="outline-primary" size="lg" type="button">Go Home</Button>
        </Form.Group>

      </Form>
      </div>

    );
  }
}

export default Home;
