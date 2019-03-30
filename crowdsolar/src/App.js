import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar} from '@material-ui/core/';
import Landowner from './Components/Landowner'
import GoogleLogin from 'react-google-login';
import Home from './Components/Home'
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
                  <Button color="inherit" style={{marginLeft: "80%"}}  href="/login">Login</Button>
                  
        </Toolbar>
      </AppBar>
        <Home />

    </Fragment>      

    );
  }
}

export default App;
