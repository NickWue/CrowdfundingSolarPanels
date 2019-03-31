import React, { Component } from 'react';
import LandownerWelcome from './LandownerWelcome';
import StartProject from './StartProject';
import Calculation from './Calculation';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';


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

  setProjectDetails = async (project) => {
    
    var financial_detail;
    await fetch('http://x10z.de/crowdsolar/getProjectFinancials/' +
    '?country=' + project.country +
    '&rooflength=' + project.length +
    '&roofwidth=' + project.width )
    .then(response => response.json())
    .then(data => financial_detail = data)

    
    this.setState({
      stage: "calculation",
      project: project,
      financial_detail: financial_detail
    });
    
  }

  setCost = async (ownerCost, crowdCost) => {
    const project = this.state.project;
    const financial_detail = this.state.financial_detail;
    await fetch('http://x10z.de/crowdsolar/addProject/' +
      '?name=' + project.name +
      '&street=none' +
      '&city=none' +
      '&countryID=' + project.country +
      '&dimX=' + project.length +
      '&dimY=' + project.width +
      '&userid=' + this.props.email +
      '&funding_required=' + crowdCost +
      '&funding_recieved=' + ownerCost +
      '&expectedreturn=' + financial_detail.roi10years
    )
    .then(data => console.log(data));
    this.setState({
      stage:"final",
      ownerCost: ownerCost,
      crowdCost: crowdCost
    });
  }

  getProjectCard = () => {
    var project = this.state.project;

    console.log(project)
    return(
      <Card style={{width: '50%'}}>
        <Card.Body>
          <Card.Title> Success!</Card.Title>
          <Card.Text>Name: {project.name}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Number of solar cells: {this.state.financial_detail.totalnummersolarcells}</ListGroupItem>
          <ListGroupItem>Funding required: {this.state.crowdCost}$</ListGroupItem>
          <ListGroupItem>ROI 10 years: {this.state.financial_detail.roi10years}%</ListGroupItem>
        </ListGroup>
      </Card>
      
    );
  }

  getPage = stage => {
    switch(stage) {
      case 'welcome':
        return(<LandownerWelcome startProject={this.setStart}/>)
      case 'start':
        return(<StartProject setProjectDetails={this.setProjectDetails}/>)
      case 'calculation':
        return(<Calculation setCost={this.setCost} totalValue={parseInt(this.state.financial_detail.Cost)}/>)
      case 'final':
        return(this.getProjectCard());
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
