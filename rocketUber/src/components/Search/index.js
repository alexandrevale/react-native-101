import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  render() {
    return <GooglePlacesAutocomplete
    	placeholder="Para onde?"
    	placeholderTextColor: '#ddd'
    	onPress={() => {  }}
    	query={{
    		key: '',
    		language: 'pt'
    	}}
    	textInputProps={{
    		autoCapitalize: "none",
    		autoCorrect: false
    	}}
    	fetchDetails
    	enablePoweredByContainer={false}
    />;
  }
}
