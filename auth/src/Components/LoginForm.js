import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '' };

	// auth users
	onButtonPress() {
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({error: 'Authentication failed'});
					});
			}); 
	}

	render() {
		return(
			<Card>

				<CardSection>
					<Input 
						label="E-mail"
						placeholder="seu-email@gmail.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Senha"
						placeholder="senha"
						secureTextEntry="true"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>

			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;