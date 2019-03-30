import React, { Component } from 'react';
import StartProject from './StartProject'
import Calculation from './Calculation'
class Landowner extends Component {
  state = {
    stage: "start",
    address: "" ,
    length: "",
    width: "",
    angle: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  setParams = (address, length, width, angle) =>{
      this.setState({   stage: "calculation",
                        address: address, 
                        length: length,
                        width: width,
                        angle: angle})
                    
  }

  getPage = stage =>{
    switch(stage) {
        case 'start':
            return(<StartProject setParams={this.setParams}/>)
        case 'calculation':
            return(<Calculation totalValue={5000}/>)
        default:
            return null;
    }
  }
  render() {
    
    return (
       this.getPage(this.state.stage)
     
    );
  }
}

export default Landowner;
