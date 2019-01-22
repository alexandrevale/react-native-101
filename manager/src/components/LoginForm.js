import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		)
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: '#fff' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		return(
			<Card>

				<CardSection>
					<Input
						label="E-mail"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				
				<CardSection>
					<Input
						secureTextEntry
						label="Senha"
						placeholder="Sua senha"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: #e74c3c
	}
}

// const mapStateToProps = state => {
// 	return {
// 		email: state.auth.email,
// 		password: state.auth.password,
// 		error: state.auth.error
// 	};
// };

const mapStateToProps = state => {
	const { email, password, error, loading } = auth;
	
	return { email,	password,	error, loading };
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser 
})(LoginForm);