import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem(libray) {
		return <ListItem libray={libray} />;

	}

	render() {
		//console.log(this.props);
		return(
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtrator={(libray) => library.id}
			/>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state)
	return { libraries: state.libraries };
};

export default connect()(LibraryList);