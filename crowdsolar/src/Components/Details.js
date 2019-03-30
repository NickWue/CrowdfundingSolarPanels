import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';

class Details extends Component {
  render() {
    const style = {
      marginLeft: "10%",
      marginRight: "10%"
    }
    return (
      <Form style={style}>
        <Form.Group controlId="details.Address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Your address" />
          <Form.Label>Surface dimensions</Form.Label>
          <Form.Row controlId="details.Dimensions">
            <Col>
              <Form.Control placeholder="Length (m)" />
            </Col>
            <Col>
              <Form.Control placeholder="Width (m)" />
            </Col>
          </Form.Row>
          <Form.Label>Angle</Form.Label>
          <Form.Control placeholder="Angle of surface"/>
          <br/>
          <Button variant="outline-primary" size="lg" type="submit">Calculate</Button>
        </Form.Group>
      </Form>

    );
  }
}

export default Details;
