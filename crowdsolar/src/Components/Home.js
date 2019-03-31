import React, { Component, Fragment } from 'react';
import home from './home.jpg';
import crowdsolar from '../crowdsolar.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: ""
    };
  }
  checkUserStatus = email => {
    var userFound = false
    var userType = null
    this.props.users.forEach(user => {
      if(user.idusers === email){
        userFound = true
        userType =  user.type
      }
    });

    

    return [userFound, userType]
  }

  addUser = (type, description) => {
    fetch('http://x10z.de/crowdsolar/addUser/' +
    '?gid='  + this.props.email +
    '&name=' + this.props.name +
    '&type=' + type +
    '&desribtion=' + description
  )
  .then(data => console.log(data));
  this.props.history.push('/'+description)
  }



  getInitial = () =>{
    return (
      <Fragment>
        <Button onClick={() => this.addUser(2, "investor")}  variant="outline-primary" size="lg">Join as an Investor</Button>
        <Button onClick={() => this.addUser(1, "landowner")}  variant="outline-primary" size="lg">Join as a Landowner</Button>
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
      {this.props.loggedIn ? this.checkUserStatus(this.props.email)[0] ? this.checkUserStatus(this.props.email)[1]  === "1" ? <Button href="/landowner">Go to landowner dashboard</Button> : <Button href="/investor">Go to investor dashboard</Button>  : this.getInitial() : <p>Please use the login button in the top right</p>}
     </div>
     </Fragment>
    );
  }
}

export default Home;
