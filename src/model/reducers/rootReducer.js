import {combineReducers} from 'redux';

import contactListReducer from './contactListReducer';
import workingContactReducer from './workingContactReducer';

const rootReducer = combineReducers({
  // list reducers here
  contactListReducer,
  workingContactReducer
});

export default rootReducer;
