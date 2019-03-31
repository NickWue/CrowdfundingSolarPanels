import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import Slider from '@material-ui/lab/Slider';

class Calculation extends Component {

  constructor(props){
    super(props)
    this.state = {
      crowdCost: this.props.totalValue/2 ,
      ownerCost: this.props.totalValue/2,
    };
  }
    
    handleChange = (_, crowdCost) => {
    this.setState({ crowdCost: crowdCost, ownerCost: this.props.totalValue - crowdCost});
    };


  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Estimated Total Price</Form.Label>
          <br/>
          <Form.Label>{ "$"  + this.props.totalValue}</Form.Label>
          <Slider
            value={this.state.crowdCost}
            min={0}
            max={this.props.totalValue}
            step={1}
            onChange={this.handleChange}
          />
          <br/>
          <Form.Label>Your investment: ${this.props.totalValue - this.state.crowdCost}</Form.Label>
          <br/>
          <Form.Label>Crowd investment: ${this.state.crowdCost}</Form.Label>
          <br/>
          
          <Button
            onClick={() => this.props.setCost(this.state.ownerCost, this.state.crowdCost)}
            variant="outline-primary" size="lg" type="button"
          >
            Submit preferences
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default Calculation;
