import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {
	const { title, artist, thumbnail_image } = data;
	const { headerContentStyle, thumbnailStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View>
					<Image 
						style={thumbnailStyle}
						source={ { uri: thumbnail_image } } 
					/>
				</View>
				<View style={headerContentStyle}">
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	}
}

export default AlbumDetail;