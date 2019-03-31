import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar} from '@material-ui/core/';
import GoogleLogin from 'react-google-login';
import Routes from "./Routes";
import { timingSafeEqual } from 'crypto';
import logo from './logo-white.png';

class App extends Component {
  constructor(props){
    super(props)
    
      this.state = {loggedIn: false ,
        email: "",
        name: "",
        googleId: "",
        users: [],
        projects: [],
        countries: []
        };
    
    

  }

  componentDidMount() {
    this.getUserData()
    this.getProjectsData()
    this.getCountriesData()
    console.log(localStorage.getItem("loginDetails"))
    if(localStorage.getItem("loginDetails") !== "null"){
      this.setState(JSON.parse(localStorage.getItem("loginDetails")))
    } 
  }
  getUserData = () => {
    fetch('http://x10z.de/crowdsolar/getUser/')
    .then(response => response.json())
    .then(data => this.setState({ users: data }));
  }
  getProjectsData = () => {
    fetch('http://x10z.de/crowdsolar/getProjects/')
    .then(response => response.json())
    .then(data => this.setState({ projects: data }));
  }
  getCountriesData = () => {
    fetch('http://x10z.de/crowdsolar/getCountries/')
    .then(response => response.json())
    .then(data => this.setState({ countries: data }));
  }

  loginSuccess = resp => {
    this.setState({ loggedIn: true,
                  email:resp.profileObj.email, 
                  name: resp.profileObj.name,
                  googleId: resp.profileObj.googleId  })
    const loginProps = {
      loggedIn: this.state.loggedIn ,
      email: this.state.email,
      name: this.state.name,
      googleId: this.state.googleId
    }
    localStorage.setItem("loginDetails", JSON.stringify(loginProps));

    this.getUserData()
    this.getProjectsData()
    this.getCountriesData()
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
      googleId: this.state.googleId,
      users: this.state.users,
      countries: this.state.countries,
      projects: this.state.projects
    }
    return (
      <Fragment >
        <div className="notthehomepageheader">
      <AppBar position="fixed">
        <Toolbar>
          <img style={{width: 200}} src={logo} alt="Logo" />
          <div style={loginStyle}>
          {this.state.loggedIn ?
          <Fragment>
            <Button href="/user" color="inherit">{this.state.name}</Button>
            <Button onClick={this.logOut} href="/" color="inherit">Log Out</Button>
          </Fragment>
          : 
          <GoogleLogin
            clientId="497920862748-l7vlamhek0bf2e6qhghvnctckljev5qf.apps.googleusercontent.com"
            buttonText="Login / Signup with Google"
            onSuccess={this.loginSuccess}
            onFailure={null}
          />}
          </div>
        </Toolbar>
      </AppBar>

      <Routes loginProps={loginProps}/>
    </div>
    </Fragment>
    );
  }
}

export default App;
