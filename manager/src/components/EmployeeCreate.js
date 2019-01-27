import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.EmployeeCreate({ name, phone, shift: shift || 'Segunda' });
	}

	render() {

		// console.log(this.props.employee);

		return (
			<Card>	
				<EmployeeForm { ...this.props } />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, { 
	employeeUpdate,
	employeeCreate
})(EmployeeCreate);