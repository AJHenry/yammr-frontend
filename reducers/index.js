import { combineReducers } from 'redux';
import { testReducer } from './testRedux';

const rootReducer = combineReducers({ testReducer });

export default rootReducer;
