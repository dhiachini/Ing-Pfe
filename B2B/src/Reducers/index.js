// index.js
import { combineReducers } from 'redux';
import accountRequestReducer from '../Reducers/accountrequest.reducer';

const rootReducer = combineReducers({
  accountRequest: accountRequestReducer,
  // Add other reducers here if needed
});

export default rootReducer;
