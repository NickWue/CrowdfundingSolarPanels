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
      {this.props.loggedIn ? <Button>Go to dashboard</Button>: <p>Please use the login button in the top right</p>}
     </div>
     </Fragment>
    );
  }
}

export default Home;
