import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar} from '@material-ui/core/';
import GoogleLogin from 'react-google-login';
import Routes from "./Routes";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false ,
      email: null,
      name: null,
      googleId: null
    };
  }
  
  loginSuccess = resp => {
    this.setState({ loggedIn: true,
                  email:resp.profileObj.email, 
                  name: resp.profileObj.name,
                  googleId: resp.profileObj.googleId  })
  console.log(resp);

  }

  render() {
    const loginStyle ={
      position: "absolute",
      right: 10

    }
    
    return (
      <Fragment >
      <AppBar position="fixed">
        <Toolbar>
          <Button  href="/" color="inherit">Home</Button>
          <Button href="/investor" color="inherit">investor</Button>
          <Button href="/landowner" color="inherit">landowner</Button>
          <div style={loginStyle}>
          {this.state.loggedIn ? <Button href="/user" color="inherit">{this.state.name}</Button>
          : <GoogleLogin
            clientId="497920862748-l7vlamhek0bf2e6qhghvnctckljev5qf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.loginSuccess}
            onFailure={null}
          />}
          </div>
        </Toolbar>
      </AppBar>

      <Routes/>
    
    </Fragment>
    );
  }
}

export default App;
