import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {
	const { 
		title, 
		artist, 
		thumbnail_image, 
		image 
	} = data;

	const { 
		headerContentStyle, 
		headerTextStyle
		thumbnailStyle,
		thumbnailContainerStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle}
						source={ { uri: thumbnail_image } } 
					/>
				</View>
				<View style={headerContentStyle}">
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					style={imageStyle}
					source={{uri: image}} 
				/>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		flex: 1,
		width: null,
		height: 300
	}
}

export default AlbumDetail;