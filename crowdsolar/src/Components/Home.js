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
      <Container id="main-frame">

        <Row id="slogan">
          <p>Invest in solar panel projects in regions <br/>that actually make sense.</p>
        </Row>

        
      </Container>
      <div style={pageStyle} id="explaination">
      {this.props.loggedIn ? this.checkUserStatus(this.props.email)[0] ? this.checkUserStatus(this.props.email)[1]  === "1" ? <Button href="/landowner">Go to landowner dashboard</Button> : <Button href="/investor">Go to investor dashboard</Button>  : this.getInitial() : <p>We at CrowdSolar want to change the way the world invests in clean solar energy. We match investors with land owners who offer just the right piece of land. Solar Projects in developing countries close to the equator not only promise a higher return of investment, but also enables these countries to develop faster and  to be more sustainable. <br/><br/>Where ever you are looking for a solar project, even if it is in your own country, because you life in that small rented flat but still care about the environment, or if you really want to get these returns up to 200% in 10 years by investing in Jamaican projects.. It’s up to you! <br/><br/>Join our platform today!    </p>}
     </div>
     </Fragment>
    );
  }
}

export default Home;
