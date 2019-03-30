import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import StartProject from './Components/StartProject'
import {AppBar, Button, Toolbar} from '@material-ui/core/AppBar';
import Calculation from './Components/Calculation';

class App extends Component {
  render() {
    return (
      <Fragment>
      <AppBar   position="fixed">
        <Toolbar>
                  <Button  href="/" color="inherit">Home</Button>
                  <Button color="inherit" style={{marginLeft: "80%"}}  href="/login">Login</Button>
                  
        </Toolbar>
      </AppBar>
        <StartProject/>
    </Fragment>      

    );
  }
}

export default App;
