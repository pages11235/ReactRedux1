import {combineReducers} from 'redux';

import contacts from './contactsReducer';

const rootReducer = combineReducers({
  // list reducers here
  contacts: contacts
});

export default rootReducer;
