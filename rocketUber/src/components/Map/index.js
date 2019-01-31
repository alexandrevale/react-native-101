import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: -23.550520,
            longitude: -46.633308,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    )
  }
}
