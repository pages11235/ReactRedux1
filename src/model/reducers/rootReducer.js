import {combineReducers} from 'redux';

import contactListState from './contactListReducer';
import workingContactState from './workingContactReducer';

const rootReducer = combineReducers({
  // list reducers here
  contactListState,
  workingContactState
});

export default rootReducer;
