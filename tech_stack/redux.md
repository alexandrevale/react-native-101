```
const reducer = (state = [], action) => {
	if ( action.type === 'split_string' ) {
   	return action.payload.split('');
  } else if ( action.type === 'add_character' ) {
	return [...state, action.payload]; // return a new array w new state and action
  }
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string', 
  payload: 'teste' 
};

store.dispatch(action);

store.getState();

const action2 = {
	type: 'add_character',
	payload: '1'
};

store.dispatch(action2);

store.getState();

```