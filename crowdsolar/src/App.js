import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Details from './Components/Details'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Calculation from './Components/Calculation'
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
      
        <Details  ></Details>
    </Fragment>      

    );
  }
}

export default App;
