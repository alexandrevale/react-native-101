import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import Search from '../Search';
import Diretions from '../Diretions';
import Details from '../Details';
import { View, Image } from 'react-native';
import { getPixelSize } from '../../utils';
import markerImage from '../../assets/marker.png';
import backImage from '../../assets/backImage.png';
import { 
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  Back
} from './styles';

Geocoder.init(''); // Chave da API
 
export default class Map extends Component {
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        // console.log(address);

        const location = address.substring(0, address.indexOf(','));
        

        this.setState({ 
          location,
          region: {
            latitude, 
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134, 
          }
        });
      }, // Sucesso
      () => {}, // Erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    )
  }

  handleLocationSelected = (data, { geometry }) => {
    const { location: {lat: latitude, lng: longitude} } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      }
    })
  }

  handleBack= () => {
    this.setState({ destination: null });
  }

  render() {
    const { region, destination, duration, location } = this.state;

    return (
      <View style={{ flex: 1 }}> 
        <MapView
          style={{ flex: 1 }}
          region={ region }
          showsUserLocation
          loadingEnabled
          ref={ e => this.mapView = e }
        >
          {destination && (
            <Fragment>
              <Directions
                origin={ region }
                destination={destination}
                onReady={ result => {
                  // console.log(result);
                  this.setState({ duration: Math.floor(result.duration) })

                  this.mapView.fitToCoordinates(result.coodinates, {
                    // ios
                    edgePadding: {
                      top: getPixelSize(50),
                      right: getPixelSize(50),
                      bottom: getPixelSize(350),
                      left: getPixelSize(50)
                    }
                  });
                }}
              />
              <Marker 
                coordinate={destination} 
                anchor={{ x: 0, y: 0 }} 
                image={markerImage} 
              >
                <LocationBox>
                  <LocationText>
                    {destination.title}
                  </LocationText>
                </LocationBox>
              </Marker>

              <Marker 
                coordinate={region} 
                anchor={{ x: 0, y: 0 }} 
              >
                
                <LocationBox>

                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>Min</LocationTimeTextSmall>
                  </LocationTimeBox>

                  <LocationText>
                    { location }
                  </LocationText>

                </LocationBox>

              </Marker>
            </Fragment>
          )}
        </ MapView>
        
        {destination ? (
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backImage} />
            </Back>
            <Details />
          </Fragment>
        ) : (
          <Search onLocationSelected={this.handleLocationSelected} />
        )}
        
      </View>
    );
  }
}
