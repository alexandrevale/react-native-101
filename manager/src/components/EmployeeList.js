import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		/* 
			nextProps é o próxixo conjunto de props 
			que o component renderizará	

			this.props continuará sendo o antigo o
			conjunto de props
		*/

		this.createDataSource(nextProps);

	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	render() {
		return (
			<View>
				<Text>Lista de funcionários</Text>
				<Text>Lista de funcionários</Text>
				<Text>Lista de funcionários</Text>
			</View>
		)
	}
}

export default connect(null, { employeesFetch })EmployeeList;