import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.data.title}</Text>
			</CardSection>
		</Card>
	)
}

export default AlbumDetail;