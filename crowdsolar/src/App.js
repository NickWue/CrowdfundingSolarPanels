import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar} from '@material-ui/core/';
import GoogleLogin from 'react-google-login';
import Routes from "./Routes";

class App extends Component {
  
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    
    return (
      <Fragment >


      <AppBar   position="fixed">
        <Toolbar>
                  <Button  href="/" color="inherit">Home</Button>
                  <GoogleLogin
                  clientId="497920862748-l7vlamhek0bf2e6qhghvnctckljev5qf.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
                <Button  href="/investor" color="inherit">investor</Button>
                <Button  href="/landowner" color="inherit">landowner</Button>
                  <Button color="inherit"   href="/login">Login</Button>
                  
        </Toolbar>
      </AppBar>
      <Routes/>

    </Fragment>      

    );
  }
}

export default App;
