import { combineReducers } from 'redux';
import User from './user';
import History from './history';

const rootReducer = combineReducers({
  User,
  History
});

export default rootReducer;
