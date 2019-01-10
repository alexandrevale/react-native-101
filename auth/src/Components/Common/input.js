import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChanceText }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				value={value}
				onChanceText={onChanceText}
				style={{ width: 100, height: 20 }}
			/>
		</View>
	)
};

export { Input };