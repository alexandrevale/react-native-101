import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});

// console.log(store.getState());
// { libraries: [{id: 1, ...}] }