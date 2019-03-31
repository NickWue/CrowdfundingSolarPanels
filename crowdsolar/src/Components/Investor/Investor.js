import React, { Component } from 'react';
import InvestorDashboard from './InvestorDashboard';
import InvestorMap from './InvestorMap';

class Investor extends Component {
  state = {
    stage: "dashboard",
  };
  changeStage = stage => {
    this.setState({stage: stage})
  }
  getPage = stage =>{
    switch(stage) {
      case 'dashboard':
        return(<InvestorDashboard props={this.props } showMap={() => 
            {this.setState({stage: "map"})}
          }/>)
      case 'map':
        return(<InvestorMap changeStage={this.changeStage} props={this.props}/>)
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

export default Investor;
