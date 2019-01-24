import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.EmployeeCreate({ name, phone, shift: shift || 'Segunda' });
	}

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

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Dia da Semana</Text>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.shift}
						onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
					>
						<Picker.Item label="Segunda" value="Segunda" />
						<Picker.Item label="Terça" value="Terça" />
						<Picker.Item label="Quarta" value="Quarta" />
						<Picker.Item label="Quinta" value="Quinta" />
						<Picker.Item label="Sexta" value="Sexta" />
						<Picker.Item label="Sábado" value="Sábado" />
						<Picker.Item label="Domingo" value="Domingo" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Cadastrar
					</Button>
				</CardSection>

			</Card>
		)
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.EmployeeForm;

	return { name, phone, shift }
};

export default connect(mapStateToProps, { 
	employeeUpdate,
	employeeCreate
})(EmployeeCreate);