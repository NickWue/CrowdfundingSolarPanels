import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import projects from '../../data/projects.json'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';
import solarpanel from './solarpanel.jpeg';

const MapWithMarker = withGoogleMap(props =>
  <GoogleMap defaultZoom={4} defaultCenter={{lat: 40, lng: 0}}>
    {projects.map((project)=>(
      <Marker  onClick={() => props.handleChange(project.id)} position={{ lat: project.lat, lng: project.lng }} />
    ))}
    
  </GoogleMap>  
);

class InvestorMap extends Component {
    state = {
      currentProject: null
    };
    handleChange = id => {
      this.setState({
        currentProject: id
      });
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
      const rightStyle = {
        float: "right",
        width: "40%",
        paddingLeft: '2%'
      }
      const leftStyle = {
        float: "left",
        width: "60%"
      }
      return (
        <div style={pageStyle}>
          <h1>Find new project {this.state.currentProject}</h1>
          <div style={leftStyle}>
          <Card style={{width: '100%'}}>
            <Card.Img variant="top" src={solarpanel}/>
            <Card.Body>
              <Card.Title>Morocco</Card.Title>
              <Card.Text>This is a description</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Status: <mark style={{color: 'Orange'}}>Building</mark></ListGroupItem>
              <ListGroupItem>Return on investment: 10% per year</ListGroupItem>
            </ListGroup>
          </Card>
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