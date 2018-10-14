import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google='google' zoom={14} 
     
        //   style={{width: 200, height: 100}}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
         >

        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCA7fHKImyZG52ysE_z6vx0IAoNnBc7PqM'
})(MapContainer)