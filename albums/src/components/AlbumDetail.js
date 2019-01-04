import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{props.data.title}</Text>
		</View>
	)
}

export default AlbumDetail;