import React, { Component } from 'react';
import {Container, Row, Button} from 'react-bootstrap';

class LandownerWelcome extends Component {

  render() {
    const pageStyle = {
      paddingTop:"100px",
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      // alignItems: 'center',
      overflow: 'hidden',
      paddingRight: "10%",
      paddingLeft: "10%",
    }

    return (
      <Container style={pageStyle}>
        <Row>
          As a landowner, you receive investment to build solar panels on your space.
          <br />
          You have the option to buy out the investors in the future.
        </Row>
        <Row>
          <Button onClick={() => this.props.startProject()}
            variant="outline-primary" size="lg" type="submit">Start your project!</Button>
        </Row>
      </Container>
    );
  }
}

export default LandownerWelcome;
