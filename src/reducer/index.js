import { combineReducers } from 'redux';
import User from './user';
import History from './history';
import Job from './job';

const rootReducer = combineReducers({
  User,
  History,
  Job
});

export default rootReducer;
