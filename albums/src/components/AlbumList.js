import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	state = {
		albums: []
	}

	componentWillMount() {
		// debugger;
		axios.get('http://rallycoding.herokuapp.com/api/music_albums');
			.then( response => this.setState({ albums: response.data }));
	}

	render() {
		console.log(this.state);
		
		return (
			<View>
				<Text></Text>
			</View>
		);
	}
}

export default AlbumList;