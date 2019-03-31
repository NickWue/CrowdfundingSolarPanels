import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap/';
import solarpanel from './solarpanel.jpeg';

class InvestorDashboard extends Component {
  state = {
    investments:[{"userid":"bbcnetwork01@gmail.com","projectid":"51","amount":"43","invest_datum":"2019-03-31","id":null,"name":null,"street":null,"city":null,"countryID":null,"dimX":null,"dimY":null,"userID":null,"status":null,"funding_requiered":null,"funding_received":null,"start_datum":null,"expectedannualreturn":null,"yearspassed":49.9609953704,"returnsofarpercent":0,"returnsofarmoney":0},{"userid":"bbcnetwork01@gmail.com","projectid":"54","amount":"4","invest_datum":"2019-03-31","id":null,"name":null,"street":null,"city":null,"countryID":null,"dimX":null,"dimY":null,"userID":null,"status":null,"funding_requiered":null,"funding_received":null,"start_datum":null,"expectedannualreturn":null,"yearspassed":49.9609953704,"returnsofarpercent":0,"returnsofarmoney":0},{"userid":"bbcnetwork01@gmail.com","projectid":"62","amount":"43","invest_datum":"2019-03-31","id":"62","name":"Solar car","street":"none","city":"none","countryID":"1","dimX":"1","dimY":"1","userID":"chriscoles01@gmail.com","status":"0","funding_requiered":"125","funding_received":"0","start_datum":"2019-03-31","expectedannualreturn":"0","yearspassed":0,"returnsofarpercent":0,"returnsofarmoney":0},{"userid":"bbcnetwork01@gmail.com","projectid":"63","amount":"32","invest_datum":"2019-03-31","id":"63","name":"solar","street":"none","city":"none","countryID":"5","dimX":"34","dimY":"4","userID":"chriscoles01@gmail.com","status":"0","funding_requiered":"2585","funding_received":"0","start_datum":"2019-03-31","expectedannualreturn":"61","yearspassed":0,"returnsofarpercent":0,"returnsofarmoney":0},{"userid":"bbcnetwork01@gmail.com","projectid":"64","amount":"43","invest_datum":"2019-03-31","id":"64","name":"solar on the roof","street":"none","city":"none","countryID":"3","dimX":"3","dimY":"12","userID":"chriscoles01@gmail.com","status":"0","funding_requiered":"15492","funding_received":"0","start_datum":"2019-03-31","expectedannualreturn":"39","yearspassed":0,"returnsofarpercent":0,"returnsofarmoney":0}]
  }
   componentDidMount() {
    this.getInvestments(this.props.props.email)
  }
  getInvestments =  async email => {
     var investments= [];
     await fetch('http://x10z.de/crowdsolar/getMyInvestments/?userid=bbcnetwork01@gmail.com'

    )
    .then(response => response.json())
    .then(data => investments = data);
    this.setState({investments: investments})
    
  }
  rendercards = () => {
    const investments = this.state.investments
    return(
      investments === [] ?
    <h1>you have no investments</h1>
    :
    investments.map((investment) => (
      <Card style={{width: '20rem'}}>
            <Card.Img variant="top" src={solarpanel}/>
            <Card.Body>
              <Card.Title>{investment.city}</Card.Title>
              <Card.Text>{investment.name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {/* <ListGroupItem>Status: <mark style={{color: 'Orange'}}>Building</mark></ListGroupItem> */}
              <ListGroupItem>Return on investment: {investment.returnsofarpercent}</ListGroupItem>
            </ListGroup>
          </Card>
    ))
    )
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
      
      return (
        <div style={pageStyle}>
          <h1>Your current projects</h1>
          {this.rendercards()}
          <br/>
          <Button onClick={() => this.props.showMap()}
            variant="outline-primary" size="lg" type="submit">Find new project</Button>
        </div>
      );
    }
}

export default InvestorDashboard;