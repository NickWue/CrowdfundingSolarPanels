import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar} from '@material-ui/core/';
import GoogleLogin from 'react-google-login';
import Routes from "./Routes";
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(props){
    super(props)
    
      this.state = {loggedIn: false ,
        email: "",
        name: "",
        googleId: "" };
    
    

  }

  componentDidMount() {

    console.log(localStorage.getItem("loginDetails"))
    if(localStorage.getItem("loginDetails") !== "null"){
      this.setState(JSON.parse(localStorage.getItem("loginDetails")))
    } 
  }

  loginSuccess = resp => {
    this.setState({ loggedIn: true,
                  email:resp.profileObj.email, 
                  name: resp.profileObj.name,
                  googleId: resp.profileObj.googleId  })
    localStorage.setItem("loginDetails", JSON.stringify(this.state));

  console.log(resp);

  }
  logOut = () => {

    this.setState({loggedIn: false ,
      email: "",
      name: "",
      googleId: "" })
    localStorage.setItem("loginDetails", "null");
    console.log(this.state)  
  }
  render() {
    const loginStyle ={
      position: "absolute",
      right: 10

    }
    var loginProps = {
      loggedIn: this.state.loggedIn ,
      email: this.state.email,
      name: this.state.name,
      googleId: this.state.googleId
    }
    return (
      <Fragment >
      <AppBar position="fixed">
        <Toolbar>
          <Button  href="/" color="inherit">Home</Button>
          <Button href="/investor" color="inherit">investor</Button>
          <Button href="/landowner" color="inherit">landowner</Button>
          <div style={loginStyle}>
          {this.state.loggedIn ?
          <Fragment>
            <Button href="/user" color="inherit">{this.state.name}</Button>
            <Button onClick={this.logOut} href="/" color="inherit">Log Out</Button>
          </Fragment>
          : 
          <GoogleLogin
            clientId="497920862748-l7vlamhek0bf2e6qhghvnctckljev5qf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.loginSuccess}
            onFailure={null}
          />}
          </div>
        </Toolbar>
      </AppBar>

      <Routes loginProps={loginProps}/>
    
    </Fragment>
    );
  }
}

export default App;
