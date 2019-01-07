import React, { Component } from 'react';
import ReactNative from 'react-native';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
	state = {
		albums: []
	}

	componentWillMount() {
		// debugger;
		axios.get('http://rallycoding.herokuapp.com/api/music_albums');
			.then( response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} data={album} />
		);
	}

	render() {
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;