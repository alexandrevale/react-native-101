import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onDecline, onAccept }) => {
	const { containerStyle, textStyle, CardSectionStyle } = styles;

	return(
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={ () => {} }
		>
			<View style={containerStyle}>
				
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}> {children} </Text>
				</CardSection>

				<CardSection>
					<Button onPress={onDecline}>Não</Button>
					<Button onPress={onAccept}>Sim</Button>
				</CardSection>

			</View>	
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,.5)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };