import {
	EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
	// shift: 'Segunda'
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			// action.payload === { prop: 'name', value: 'Alexandre' }
			return { ...state, [action.payload.prop]: action.payload.value }

		default:
			return state;
	}
}