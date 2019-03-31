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

  sendProject = (project) => {
    fetch('http://x10z.de/crowdsolar/addProject/' +
      '?name=6' + project.name +
      '&street=nameofthestreet2' +
      '&countryID=' + project.country +
      '&dimX=' + project.length +
      '&dimY=' + project.width +
      '&userid=' + this.props.email +
      '&funding_required=5000' +
      '&funding_recieved=0' +
      '&expectedreturn=8'
    )
  }

  setProjectDetails = (project) => {
    this.setState({
      stage: "calculation",
      project: project
    });
  }

  setCost = (ownerCost, crowdCost) => {
    this.setState({
      stage:"final",
      ownerCost: ownerCost,
      crowdCost: crowdCost
    });
  }

  makeCalculations = () => {
    /* INT*/
    var x= 28;  /* max. sun angle */
    var aroof = this.state.angle /* angle roof */
    var rooflenght = this.state.length;
    var roofwidth = this.state.width;
    var l =1; //length of one solarcell
    var w = 0.5; //width of one solarcell
    
    /* Main*/
    if (aroof > x){
      document.writeln("No callulation necessary - shadow cast does not have to be considered");
    } else {
      var diff = x-aroof;
      document.writeln("add " + diff +" � for perfect alignment - note the shadow");
      var d =(l*Math.asin(diff* Math.PI/180)*Math.acos((aroof+x)* Math.PI/180))/Math.asin((aroof+x)* Math.PI/180)
      document.writeln("distance between the modules (in m): "+ d + "<br>");

      var nrooflenght = Math.floor(rooflenght/ (l+d))
      var nroofwidth = Math.floor(roofwidth/ w);

      document.write("nummer of solarcells in length: " +nrooflenght + "<br>");
      document.write("nummer of solarcells in width: " +nroofwidth + "<br>");
      var totalnofs = nrooflenght * nroofwidth;
      document.write("total nummer of solarcells on this roof: "+ totalnofs);
    }
  }

  getPage = stage => {
    switch(stage) {
      case 'welcome':
        return(<LandownerWelcome startProject={this.setStart}/>)
      case 'start':
        return(<StartProject setProjectDetails={this.setProjectDetails}/>)
      case 'calculation':
        return(<Calculation setCost={this.setCost} totalValue={5000}/>)
      case 'final':
        return(this.state.country);
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
