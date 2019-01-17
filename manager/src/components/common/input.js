import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChanceText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={inputStyle}
				placeholder={placeholder}
				autoCorrect={false}
				secureTextEntry={secureTextEntry}
				value={value}
				onChanceText={onChanceText}
			/>
		</View>
	)
};

const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	inputStyle: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}	
}

export { Input };