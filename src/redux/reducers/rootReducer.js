import {combineReducers} from 'redux';

import contactsState from './contactsReducer';

const rootReducer = combineReducers({
  // list reducers here
  contactsState
});

export default rootReducer;
