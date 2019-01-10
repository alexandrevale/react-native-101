import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
	state = { text: '' };

	render() {
		return(
			<Card>
				<CardSection />
					<TextInput 
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
						style={{ width: 100, height: 20 }}
					/>
				</CardSection>

				<CardSection />
					
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>

			</Card>
		)
	}
}

export default LoginForm;