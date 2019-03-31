import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import projects from '../../data/projects.json'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';


const MapWithMarker = withGoogleMap(props =>
  <GoogleMap defaultZoom={4} defaultCenter={{lat: 40, lng: 0}}>
    {projects.map((project) => (
      <Marker onClick={() => props.handleChange(project.id)} position={{ lat: project.lat, lng: project.lng }} />
    ))}
    
  </GoogleMap>  
);

class InvestorMap extends Component {
    state = {
      currentProject: 1
    };

    handleChange = (projectid) => {
      this.setState({
        currentProject: projectid
      });
    }

    checkProj = (p) => {
      return p.id === this.state.currentProject;
    }

    getcard = () => {
      var project = projects.filter(this.checkProj)[0];

      return(
        <Card style={{width: '100%'}}>
          <Card.Body>
            <Card.Title> {project.name}</Card.Title>
            <Card.Text>This project is in {project.city}.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>Status: {project.status}</ListGroupItem> */}
            <ListGroupItem>Funding required: {project.funding_required}$</ListGroupItem>
            <ListGroupItem>Funding received: {project.funding_received}$</ListGroupItem>
            <ListGroupItem>Return on investment: ...</ListGroupItem>
            <ListGroupItem>
              <Button variant="outline-primary" type="submit">Invest</Button>
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
          <h1>Find your next investment</h1>
          <div style={leftStyle}>
            {this.getcard()}
          </div>  
          <div style={rightStyle}>
            <MapWithMarker
              handleChange={this.handleChange}
              containerElement={<div style={{ height: "600px"}} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
         </div>
      );
    }
}

export default InvestorMap;