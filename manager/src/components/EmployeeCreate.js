import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Nome"
						placeholder="Nome do funcionário"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Telefone"
						placeholder="(11) 98888-8888"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
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

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.EmployeeForm;

	return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);