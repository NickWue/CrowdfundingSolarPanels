import React, { Component, Fragment } from 'react';
import home from './home.jpg';
import crowdsolar from '../crowdsolar.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  checkUserStatus = email => {
    var userFound = false
    this.props.users.forEach(user => {
      if(user.idusers === email){
        userFound = true
      }
    });
    return userFound
  }

  addUser = (type, description) => {
    fetch('http://x10z.de/crowdsolar/addUser/' +
    '?gid='  + this.props.email +
    '&name=' + this.props.name +
    '&type=' + type +
    '&desribtion=' + description
  );
  }

  sendProject = (project, lat, lng) => {
    fetch('http://x10z.de/crowdsolar/addProject/' +
      '?name=' + project.name +
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

  getInitial = () =>{
    return (
      <Fragment>
        <Button onClick={() => this.addUser(2, "Investor")} href="/investor" variant="outline-primary" size="lg">Join as an Investor</Button>
        <Button onClick={() => this.addUser(1, "Landowner")} href="/landowner" variant="outline-primary" size="lg">Join as a Landowner</Button>
      </Fragment>
    )
  }
  render() {
    const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        paddingRight: "10%",
        paddingLeft: "10%",
        backgroundImage: home,
        backgroundSize:"100%",
    }
    
    return (
      <Fragment>
      <Container style={pageStyle}>
        <Row>
          <Image src={crowdsolar} fluid />
        </Row>
        <Row>
          <p>We match investors looking for climate impact with landowners.</p>
        </Row>
        <Row>
          <p>Join us!</p>
        </Row>
        
      </Container>
      <div style={pageStyle}>
      {this.props.loggedIn ? this.checkUserStatus(this.props.email) ? <Button href={() => this.getDash()}>Go to dashboard</Button> : this.getInitial() : <p>Please use the login button in the top right</p>}
     </div>
     </Fragment>
    );
  }
}

export default Home;
