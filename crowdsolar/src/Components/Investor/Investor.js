import React, { Component } from 'react';
import InvestorDashboard from './InvestorDashboard';
import InvestorMap from './InvestorMap';

class Investor extends Component {
  state = {
    stage: "dashboard",
  };

  getPage = stage =>{
    switch(stage) {
      case 'dashboard':
        return(<InvestorDashboard showMap={() => 
            {this.setState({stage: "map"})}
          }/>)
      case 'map':
        return(<InvestorMap/>)
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
