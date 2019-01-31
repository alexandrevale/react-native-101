import React, { Component } from 'react';
import { Platform } from 'react-native';
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
    	styles={{
    		container: {
    			position: "absolute",
    			top: Platform.select({ ios: 60, android: 40 }),
    			width: "100%"
    		},
    		textInputContainer: {
    			flex: 1,
    			backgroundColor: "transparent",
    			height: 50,
    			marginHorigontal: 20,
    			borderTopWidth: 0,
    			borderBottomWidith: 0
    		},
    		textInput: {
    			height: 50,
    			margin: 0,
    			borderRadius: 0,
    			paddingTop: 0,
    			paddingRight: 20,
    			paddingBottom: 0,
    			paddingLeft: 20,
    			marginTop: 0,
    			marginRight: 0,
    			marginBottom: 0,
    			marginLeft: 0,
    			elevation: 5,
    			shadowColor: "#000",
    			shadowOpacity: 0.1,
    			shadowOffset: { x: 0, y: 0 },
    			shadowRadius: 15,
    			borderWidth: 1,
    			borderColor: "#ddd",
    			fontSize: 18
    		},
    		listView: {
    			borderWidth: 1,
    			borderColor: "#ddd",
    			backgroundColor: "#fff",
    			marginHorigontal: 20,
    			elevation: 5,
    			shadowColor: "#000",
    			shadowOpacity: 0.1,
    			shadowOffset: { x: 0, y: 0 },
    			shadowRadius: 15,
    			marginTop: 10
    		},
    		description: {
    			fontSize: 16
    		},
    		row {
    			padding: 20,
    			height: 50
    		}
    	}}
    />;
  }
}

