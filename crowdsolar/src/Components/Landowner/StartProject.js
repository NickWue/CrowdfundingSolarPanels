import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom'

class StartProject extends Component {
  state = {
    country: "Jamaica" ,
    length: "",
    width: "",
    angle: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    

    return (

      <Form >
    
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control id="country" onChange={this.handleChange} as="select">
            <option value="Jamaica">Jamaica</option>
            <option value="Philippines">Philippines</option>
            <option value="Peru">Peru</option>
            <option value="Portugal">Portugal</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
          </Form.Control>


          <Form.Label>Surface dimensions</Form.Label>
          <Form.Row controlId="StartProject.Dimensions">
            <Col>
              <Form.Control onChange={this.handleChange} id="length" placeholder="Length (m)" />
            </Col>
            <Col>
              <Form.Control onChange={this.handleChange} id="width"  placeholder="Width (m)" />
            </Col>
          </Form.Row>
          <Form.Label >Angle</Form.Label>
          <Form.Control controlId="StartProject.Angle" onChange={this.handleChange} id="angle"  placeholder="Angle of surface"/>
          <br/>
          <Button onClick={() => this.props.setRoofParams(this.state.country, this.state.length, this.state.width, this.state.angle)}
            controlId="StartProject.Calculate" variant="outline-primary" size="lg" type="submit">Calculate</Button>
        </Form.Group>
      </Form>

    );
  }
}

export default StartProject;
