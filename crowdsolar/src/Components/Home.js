import React, { Component } from 'react';
import home from './home.jpg';
import crowdsolar from '../crowdsolar.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
      
    );
  }
}

export default Home;
