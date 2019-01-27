import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		//console.log(name, phone, shift);
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Seu próximo turno será: ${shift}`);
	}

	onDecline() {
		this.setState({ showModal: false });
	}
	
	onAccept() {
		const { uid } = this.props.employee;

		this.props.employeeDelete({ uid });
	}

	render () {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Salvar
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						Enviar Mensagem
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Deletar Cadastro
					</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onDecline={this.onDecline.bind(this)}
					onAccept={this.onAccept.bind(this)}
				>
					Você tem certeza que deseja deletar este cadastro?
				</Confirm>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}

export default  connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);