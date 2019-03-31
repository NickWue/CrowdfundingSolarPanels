import React, { Component } from 'react';
import home from './home.jpg'

class Home extends Component {
    state = {
        
      };
   

  render() {
    const pageStyle = {
        paddingTop:"100px",
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingRight: "10%",
        paddingLeft: "10%",
        // backgroundImage: `url(${home})`,
        // backgroundSize:"100%",
      }
    
    return (
      <img style={{maxWidth: "100%"}} src={home} alt=""></img>
    );
  }
}

export default Home;
