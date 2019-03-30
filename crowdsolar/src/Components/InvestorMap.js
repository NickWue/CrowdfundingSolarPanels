import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const MapWithMarker = withGoogleMap(props =>
  <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>  
);

class InvestorMap extends Component {
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
          <h1>Find new project</h1>
            <MapWithMarker
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
      );
    }
}

export default InvestorMap;