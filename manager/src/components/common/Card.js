import React from 'react';
import ReactNative from 'react-native';
import { View } from 'react-native';

const Card = (props) => {
	return(
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	)
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 1,
		marginTop: 10
		marginRight: 5,
		marginBottom: 0,
		marginLeft: 5,
	}
}

export { Card };