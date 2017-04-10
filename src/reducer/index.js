import { combineReducers } from 'redux';
import User from './user';
import History from './history';
import Job from './job';
import Company from './company';

const rootReducer = combineReducers({
  User,
  History,
  Job,
  Company
});

export default rootReducer;
