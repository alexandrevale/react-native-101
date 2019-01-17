import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component<Props> {
	render() {
		return(
			<Card>
			
				<CardSection>
					<Input
						label="E-mail"
						placeholder="email@gmail.com"
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