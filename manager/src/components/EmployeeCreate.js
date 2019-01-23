import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Nome"
						placeholder="Nome do funcionário"
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Telefone"
						placeholder="(11) 98888-8888"
					/>
				</CardSection>

				<CardSection>

				</CardSection>

				<CardSection>
					<Button>
						Cadastrar
					</Button>
				</CardSection>

			</Card>
		)
	}
}

export default EmployeeCreate;