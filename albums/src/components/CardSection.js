import React from 'react';
import ReactNative from 'react-native';
import { View } from 'react-native';

const CardSection = () => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDiretion: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export default CardSection;