import { combineReducers } from 'redux';
import Panel from './panel';
import User from './user';

const rootReducer = combineReducers({
  Panel,
  User
});

export default rootReducer;
