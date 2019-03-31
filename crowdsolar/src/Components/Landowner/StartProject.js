import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom'

class StartProject extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      country: "1",
      length: "",
      width: "",
      angle: ""
    };
  }
  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Project name</Form.Label>
          <Form.Control onChange={this.handleChange} placeholder="Solar panels on my roof"/>

          <Form.Label>Project description</Form.Label>
          <Form.Control onChange={this.handleChange} placeholder="Short description"/>
  
          <Form.Label>Country</Form.Label>
          <Form.Control id="country" onChange={this.handleChange} as="select">
            <option value="1">Jamaica</option>
            <option value="2">Philippines</option>
            <option value="3">Peru</option>
            <option value="4">Portugal</option>
            <option value="5">Germany</option>
            <option value="6">Italy</option>
          </Form.Control>

          <Form.Label>Surface dimensions</Form.Label>
          <Form.Row controlId="StartProject.Dimensions">
            <Col>
              <Form.Control onChange={this.handleChange} id="length" placeholder="Length (m)" />
            </Col>
            <Col>
              <Form.Control onChange={this.handleChange} id="width" placeholder="Width (m)" />
            </Col>
          </Form.Row>
          <Form.Label >Angle</Form.Label>
          <Form.Control controlId="StartProject.Angle" onChange={this.handleChange} id="angle"  placeholder="Angle of surface"/>
          
          <br/>

          <Button onClick={() => this.props.setProjectDetails(this.state)}
            variant="outline-primary" size="lg" type="submit">Calculate</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default StartProject;
