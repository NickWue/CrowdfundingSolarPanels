import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import Slider from '@material-ui/lab/Slider';

class Calculation extends Component {
    state = {
        value: 3,
      };
    handleChange = (event, value) => {
    this.setState({ value });
    };
    
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
      <Form style={pageStyle}>
        <Form.Group controlId="details.Address">
          <Form.Label>Estimated Price</Form.Label>
          <Form.Label>{this.props.estimatedPrice}</Form.Label>
          <Slider
          value={this.state.value}
          min={0}
          max={6}
          step={1}
          onChange={this.handleChange}
        />
          <br/>
          <Button variant="outline-primary" size="lg" type="submit">Submit preferences</Button>
        </Form.Group>

      </Form>

    );
  }
}

export default Calculation;
