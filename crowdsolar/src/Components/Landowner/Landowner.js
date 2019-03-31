import React, { Component } from 'react';
import LandownerWelcome from './LandownerWelcome';
import StartProject from './StartProject';
import Calculation from './Calculation';

class Landowner extends Component {
  constructor(props){
    super(props)
    this.state = {
      stage: "welcome",

      project: "",

      nsolarcells: 0,
      totalCost: 0,
      ownerCost: 0,
      crowdCost: 0
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  setStart = () => {
    this.setState({
      stage: "start"
    })
  }

   sendProject =   (project) => {
    
   
  }

  getProjectFinance = (project) => {
    
  }

  setProjectDetails = async (project) => {
    // this.getProjectFinance(project)
    
    
    // this.sendProject(project)

    var financial_detail;
    await fetch('http://x10z.de/crowdsolar/getProjectFinancials/' +
    '?country=' + project.country +
    '&rooflength=' + project.length +
    '&roofwidth=' + project.width )
    .then(response => response.json())
    .then(data => financial_detail = data)

   await fetch('http://x10z.de/crowdsolar/addProject/' +
    '?name=' + project.name +
    '&street=none' +
    '&city=' + 'berlin' +
    '&countryID=' + project.country +
    '&dimX=' + project.length +
    '&dimY=' + project.width +
    '&userid=' + this.props.email +
    '&funding_required=' + financial_detail.Cost +
    '&funding_recieved=0' +
    '&expectedreturn=' + financial_detail.roi10years
  )
  .then(data => console.log(data))
  this.setState({
    stage: "calculation",
    project: project,
    financial_detail: financial_detail
  });
    
  }

  setCost = (ownerCost, crowdCost) => {
    this.setState({
      stage:"final",
      ownerCost: ownerCost,
      crowdCost: crowdCost
    });
  }


  getPage = stage => {
    switch(stage) {
      case 'welcome':
        return(<LandownerWelcome startProject={this.setStart}/>)
      case 'start':
        return(<StartProject setProjectDetails={this.setProjectDetails}/>)
      case 'calculation':
        return(<Calculation setCost={this.setCost} totalValue={this.state.financial_detail.Cost}/>)
      case 'final':
        return('Success!');
      default:
        return null;
    }
  }

  render() {
    const pageStyle = {
      paddingTop:"100px",
      // display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      paddingRight: "10%",
      paddingLeft: "10%",
    }

    return (
      <div style={pageStyle}>
        {this.getPage(this.state.stage)}
      </div>
    );
  }
}

export default Landowner;
