import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {Form, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';


const MapWithMarker = withGoogleMap(props =>
  <GoogleMap defaultZoom={4} defaultCenter={{lat: 40, lng: 0}}>
    {props.projects.map((project) => (
      <Marker onClick={() => props.handleChange(project.id)} position={{ lat: parseFloat(project.lng) , lng: parseFloat(project.lat)  }} />
    ))}
    
  </GoogleMap>  
);

class InvestorMap extends Component {
    state = {
      currentProject: this.props.props.projects[0].id,
      investing: "0"
    };

    handleChange = (projectid) => {
      this.setState({
        currentProject: projectid
      });
    }

    checkProj = (p) => {
      console.log(p.id === this.state.currentProject)
      return p.id === this.state.currentProject;
    }
    addInvestment = ( project, amount) => {
      fetch('http://x10z.de/crowdsolar/addInvestment/' +
      '?userid=' + this.props.props.email +
      "&projectid=" + project.id +
      "&amount=" + amount
    )
    .then(data => console.log(data));
    this.props.changeStage('dashboard')
    }

    handleChangea = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    getcard = () => {
      var project = this.props.props.projects.filter(this.checkProj)[0];

      console.log(project)
      return(
        <Card style={{width: '100%'}}>
          <Card.Body>
            <Card.Title> {project.name}</Card.Title>
            <Card.Text>This project is in {project.country}.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>Status: {project.status}</ListGroupItem> */}
            <ListGroupItem>Funding required: {project.funding_required}$</ListGroupItem>
            <ListGroupItem>Funding received: {project.funding_received}$</ListGroupItem>
            <ListGroupItem>Return on investment: ...</ListGroupItem>
            <ListGroupItem>Amount to invest: <Form.Control onChange={this.handleChangea} id="investing" placeholder="enter $ amount here"/></ListGroupItem>

            <ListGroupItem>
              <Button onClick={() => this.addInvestment(project, this.state.investing)} variant="outline-primary" type="submit">Invest</Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
        
      );
    }
    
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

      const leftStyle = {
        float: "left",
        width: "40%",
        paddingRight: '2%'
      }

      const rightStyle = {
        float: "right",
        width: "60%"
      }

      return (
        <div style={pageStyle}>
          <h1>Find your next investment </h1>
          
          <div style={leftStyle}>
            {this.getcard()}
          </div>  
          <div style={rightStyle}>
            <MapWithMarker
              handleChange={this.handleChange}
              projects= {this.props.props.projects}
              containerElement={<div style={{ height: "600px"}} />}
              mapElement={<div style={{ height: `100%` }}
               />}
            />
          </div>
         </div>
      );
    }
}

export default InvestorMap;