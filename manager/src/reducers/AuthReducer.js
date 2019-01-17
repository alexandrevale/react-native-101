import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED
} from '../action/types';

const INITIAL_STATE = { 
	email: '',
	password: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			// state.email = action.payload;
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
		return { ...state, password: action.payload };

		default: 
			return state;
	}
}