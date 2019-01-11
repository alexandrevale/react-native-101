import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from '.components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }; 

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

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return ()
					<Button onPress{() => firebase.auth().signOut()}>
						Logout
					</Button>;
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;