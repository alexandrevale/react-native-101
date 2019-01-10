import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from '.components/common';

class App extends Component {
	componentWillMount() {
		// data from Firebase console
		firebase.initializeApp({
	    apiKey: '',
	    authDomain: '',
	    databaseURL: '',
	    projectId: '',
	    storageBucket: '',
	    messagingSenderId: ''
		});
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<Text>App</Text>
			</View>
		);
	}
}

export default App;