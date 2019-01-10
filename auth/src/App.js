import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from '.components/common';
import LoginForm from './components/LoginForm';

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
				<LoginForm />
			</View>
		);
	}
}

export default App;