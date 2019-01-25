import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import { ListItem } from './ListItem';

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

	renderRow(employee) {
		return <ListItem employee = {employee} />;
	}

	render() {
		
		// console.log(this.props);

		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		)
	}
}

// Object to Array
const mapsSateToProps = state => {
	const employees = _.map(state.employees, (val, udi) => {
		return {
			...val, uid
			// {shift: 'Segunda', name: 'Alexandre', id: '1'}
		};
	});

	return { employees };
};

export default connect(mapsSateToProps, { employeesFetch })EmployeeList;