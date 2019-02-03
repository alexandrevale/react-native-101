import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ origin, destination, onReady }) => (
    <MapViewDirections
      // destination={{ 
      //   latitude: destination.latitude, 
      //   longitude: destination.longitude 
      // }}
      destination={ destination } 
      origin={ origin }
      onReady={ onReady }
      apikey=""
      strokeWidth={3}
      strokeColor="#222"
    />
);

export default Directions;