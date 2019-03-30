import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import Slider from '@material-ui/lab/Slider';

class Calculation extends Component {
    state = {
        value: this.props.totalValue/2 ,
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
          <Form.Label>Estimated Total Price</Form.Label>
          <br/>
          <Form.Label>{ "$"  + this.props.totalValue}</Form.Label>
          <Slider
          value={this.state.value}
          min={0}
          max={this.props.totalValue}
          step={1}
          onChange={this.handleChange}
        />
        <br/>
        <Form.Label>Your investment: ${this.props.totalValue - this.state.value}</Form.Label>
        <br/>
          <Form.Label>Crowd investment: ${this.state.value}</Form.Label>
            <br/>
          
          <Button variant="outline-primary" size="lg" type="submit">Submit preferences</Button>
        </Form.Group>

      </Form>

    );
  }
}

export default Calculation;
