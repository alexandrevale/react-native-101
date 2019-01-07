import React from 'react';
import ReactNative from 'react-native';
import { Text } from 'react-native';

const Button = () => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity style={buttonStyle}>
			<Text style={textStyle}>Click me</Text>
		</TouchableOpacity>
	)
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '@007aff',
		fontSize: 16,
		fontWeight: '700',
		paddingTop: 10,
		paddingBottom: 10
	}
}

export default Button;