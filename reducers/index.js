import { combineReducers } from 'redux';
import { testReducer } from './testRedux';
import { authenticationReducer } from './authentication.reducer';

const rootReducer = combineReducers({ testReducer, authenticationReducer });

export default rootReducer;
