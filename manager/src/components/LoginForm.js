import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	render() {
		return(
			<Card>

				<CardSection>
					<Input
						label="E-mail"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>
				
				<CardSection>
					<Input
						secureTextEntry
						label="Senha"
						placeholder=""
					/>
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>

			</Card>
		);
	}
}

export default connect(null, { emailChanged })(LoginForm);